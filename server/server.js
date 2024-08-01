const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
require("../config/db");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 5000;

const UserRouter = require("./api/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

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

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/quill";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});

module.exports = db;

// Use user routes
app.use("/user", UserRouter);

// Define Mongoose schema and model
const Schema = mongoose.Schema;

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

// Endpoint for user login
app.post("/login", (req, res) => {
  // Authenticate user (validate credentials, etc.)
  // If authentication is successful, generate JWT
  const token = jwt.sign({ userId: user.id }, "your_secret_key", {
    expiresIn: "1h",
  }); // Adjust expiresIn as needed

  // Set JWT as an HTTP-only cookie
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true /* if using HTTPS */,
      sameSite: "strict",
    })
    .sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
