const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");
const UserVerification = require("../models/UserVerification");
require("dotenv").config();

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// User registration route
router.post("/signup", async (req, res) => {
  const { name, email, password, consent } = req.body;

  if (!name || !email || !password || !consent) {
    return res.status(400).json({ message: "All fields are required and consent must be given" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, isVerified: false });
    await newUser.save();

    const verificationToken = uuidv4();
    const userVerification = new UserVerification({
      userId: newUser._id,
      token: verificationToken,
    });
    await userVerification.save();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Verify your email',
      text: `Please verify your email by clicking the following link: ${process.env.BASE_URL}/verify/${verificationToken}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "User registered. Please verify your email." });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;