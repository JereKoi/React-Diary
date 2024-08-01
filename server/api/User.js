const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// mongoDB user model
const User = require("../models/User");

// mongoDB user verification model
const UserVerification = require("../models/UserVerification");

// email handler
const nodemailer = require("nodemailer");

// unique string
const { v4: uuidv4 } = require("uuid");

// env variables
require("dotenv").config();

// Password handler
const bcrypt = require("bcrypt");

// Sign up
router.post("/signup", (req, res) => {
  let { name, email, password } = req.body;

  // Check if name, email, and password are defined and not empty
  if (!name || !email || !password) {
    const emptyFields = [];
    if (!name) emptyFields.push("name");
    if (!email) emptyFields.push("email");
    if (!password) emptyFields.push("password");

    return res.json({
      status: "FAILED",
      message: `Empty or undefined input fields: ${emptyFields.join(", ")}`,
    });
  }

  // Trim whitespace if the variables are defined
  name = name.trim();
  email = email.trim();
  password = password.trim();

  // Validate email format
  if (!/^[a-zA-Z ]*$/.test(name)) {
    return res.json({
      status: "FAILED",
      message: "Invalid name entered",
    });
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.json({
      status: "FAILED",
      message: "Invalid email entered",
    });
  }

  if (password.length < 8) {
    return res.json({
      status: "FAILED",
      message: "Password is too short!",
    });
  } else {
    // Checking if user already exists
    User.find({ email })
      .then((result) => {
        if (result.length) {
          // A user already exists
          res.json({
            status: "FAILED",
            message: "User with the provided email already exists",
          });
        } else {
          // Try to create new user

          // Password handling
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newUser = new User({
                name,
                email,
                password: hashedPassword,
              });

              newUser
                .save()
                .then((result) => {
                  res.json({
                    status: "SUCCESS",
                    message: "Signup successful",
                    data: result,
                  });
                })
                .catch((err) => {
                  console.log(err);
                  res.json({
                    status: "FAILED",
                    message: "An error occurred while saving user account!",
                  });
                });
            })
            .catch((err) => {
              console.log(err);
              res.json({
                status: "FAILED",
                message: "An error occurred while hashing password!",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "FAILED",
          message: "An error occurred while checking for existing user!",
        });
      });
  }
});

// Sign in route
router.post("/signin", async (req, res) => {
  // Extract email and password from request body
  const { email, password } = req.body;

  try {
    // Find user by email in the database
    const user = await User.findOne({ email });

    // Check if user exists and verify password
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, "your_secret_key", {
        expiresIn: "1h",
      });

      // Set token as HTTP-only cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: true /* if using HTTPS */,
        sameSite: "strict",
      });

      // Return success response
      return res.json({
        status: "SUCCESS",
        message: "Sign in successful",
        redirectUrl: "/DiaryPage",
      });
    } else {
      // Return failed login response
      return res.json({
        status: "FAILED",
        message: "Invalid credentials entered!",
      });
    }
  } catch (error) {
    console.error("Error signing in:", error);
    return res.json({
      status: "FAILED",
      message: "An error occurred while signing in",
    });
  }
});

// Reset password
router.post("/reset-password", async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  // Validate email, newPassword, and confirmPassword
  if (!email || !newPassword || !confirmPassword) {
    return res.json({
      status: "FAILED",
      message: "All fields are required",
    });
  }

  if (newPassword !== confirmPassword) {
    return res.json({
      status: "FAILED",
      message: "Passwords do not match",
    });
  }

  try {
    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password in the database
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { password: hashedPassword } },
      { new: true }
    );

    if (!user) {
      return res.json({
        status: "FAILED",
        message: "User not found",
      });
    }

    // Password reset successfully
    return res.json({
      status: "SUCCESS",
      message: "Password reset successful",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "FAILED",
      message: "Error resetting password",
    });
  }
});

module.exports = router;
