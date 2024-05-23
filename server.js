// mongodb
require("./config/db");

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

const UserRouter = require("./api/User");
/* 

TODO: Fix this connection

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/quill", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
*/
// Middleware
app.use(bodyParser.json());
app.use(cors());

// For accepting post form data
app.use(express.json());

app.use("/user", UserRouter);

const textSchema = new mongoose.Schema({
  content: String,
});

const Text = mongoose.model("Text", textSchema);

// Route to save text
app.post("/save", async (req, res) => {
  const { content } = req.body;
  const text = new Text({ content });
  await text.save();
  res.status(200).send("Text saved successfully");
});

// Route to get text
app.get("/text", async (req, res) => {
  const text = await Text.findOne().sort({ _id: -1 });
  res.status(200).json(text);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
