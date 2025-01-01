const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const dotenv = require("dotenv");
const http = require("http");
const socketIo = require("socket.io");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Joi = require("joi");
const winston = require("winston");

// Load environment variables
dotenv.config();

// Validate environment variables
const envSchema = Joi.object({
  PORT: Joi.number().default(5000),
  MONGODB_URI: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
}).unknown().required();

const { error } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, HTTP authentication)
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
app.use("/login", require("./UserLogin"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Serve static files from the "public" directory
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send existing entries to the new client
  socket.emit("load entries", diaryEntries);

  // Listen for new diary entries
  socket.on("new entry", async (entry) => {
    try {
      // Save the new entry to MongoDB
      const text = new Text({ content: entry });
      await text.save();

      // Update local diaryEntries array (optional)
      diaryEntries.push(entry);

      // Broadcast the new entry to all connected clients
      io.emit("new entry", entry);
    } catch (error) {
      console.error("Error saving new entry:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
})();

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;

// Define Mongoose schema and model for User
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Avoid overwriting the model if it already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

// Define Mongoose schema and model for Text
const TextSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Text = mongoose.model("Text", TextSchema);

// Define routes
app.get("/text", async (req, res) => {
  try {
    const text = await Text.findOne().sort({ _id: -1 });
    res.json(text);
  } catch (error) {
    res.status(500).json({ error: "Error fetching content" });
  }
});

app.post("/api/save", async (req, res) => {
  try {
    const { content } = req.body;
    let text = await Text.findOne();
    if (!text) {
      text = new Text({ content });
    } else {
      text.content = content;
    }
    await text.save();
    res.status(200).json({ message: "Text saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving content" });
  }
});

// Endpoint for user registration
app.post("/api/user/register",
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error registering user" });
    }
  }
);

// Endpoint for user login
app.post("/api/user/login",
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Set JWT as an HTTP-only cookie
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Ensure secure cookies in production
          sameSite: "strict",
        })
        .sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "An error occurred during login" });
    }
  }
);

// Centralized error handling middleware
app.use((err, req, res, next) => {
  winston.error(err.stack);
  res.status(500).json({ message: "An internal server error occurred" });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;