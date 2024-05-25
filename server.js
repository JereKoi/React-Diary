const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

const UserRouter = require("./api/User");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

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
    const text = await Text.findOne(); // Fetch the first document
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
