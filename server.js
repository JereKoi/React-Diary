const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
require("./config/db");
import { server } from "socket.io";

const app = express();
const port = process.env.PORT || 5000;

const io = new server(process.env.PORT, {
  cors: {
    //TODO: TÄMÄ LOCALHOST OSOITE SAATTAA OLLA VÄÄRIN
    // KORJAA MYÖS EHKÄ LUKEMAAN PORTTI .ENV TIEDOSTOSTA
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");
});

const UserRouter = require("./api/User");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Use user routes
app.use("/user", UserRouter);

// Define Mongoose schema and model
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  content: { type: String, required: true },
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

app.post("/save", async (req, res) => {
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
