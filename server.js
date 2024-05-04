// mongodb
require("./config/db");

const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const UserRouter = require("./api/User");

app.use(cors());

// For accepting post form data
app.use(express.json());

app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
