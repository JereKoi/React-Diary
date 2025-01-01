const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../client/src/App');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mockingoose = require('mockingoose');

const express = require("express");

module.exports = app;

describe("POST /login", () => {
  // Reset all mockingoose configurations before each test
  beforeEach(() => {
    mockingoose.resetAll();
  });

  // Test case: Missing email or password in the request
  it("should return 400 if email or password is missing", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "", password: "" }); // Sending empty fields

    expect(res.status).toBe(400); // Expecting HTTP status 400
    expect(res.body.message).toBe("All fields are required"); // Check the error message
  });

  // Test case: User not found in the database
  it("should return 400 if user does not exist", async () => {
    mockingoose(User).toReturn(null, "findOne"); // Mocking User.findOne to return null

    const res = await request(app)
      .post("/login")
      .send({ email: "nonexistent@example.com", password: "password123" }); // Nonexistent user

    expect(res.status).toBe(400); // Expecting HTTP status 400
    expect(res.body.message).toBe("Invalid credentials"); // Check the error message
  });

  // Test case: Incorrect password provided
  it("should return 400 if password is incorrect", async () => {
    const user = {
      _id: new mongoose.Types.ObjectId(), // Mock a user ID
      email: "test@example.com",
      password: await bcrypt.hash("correctpassword", 10), // Hash the correct password
    };

    mockingoose(User).toReturn(user, "findOne"); // Mock User.findOne to return the user

    const res = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "wrongpassword" }); // Provide incorrect password

    expect(res.status).toBe(400); // Expecting HTTP status 400
    expect(res.body.message).toBe("Invalid credentials"); // Check the error message
  });

  // Test case: Successful login with correct email and password
  it("should return 200 and set a cookie if login is successful", async () => {
    const user = {
      _id: new mongoose.Types.ObjectId(), // Mock a user ID
      email: "test@example.com",
      password: await bcrypt.hash("correctpassword", 10), // Hash the correct password
    };

    mockingoose(User).toReturn(user, "findOne"); // Mock User.findOne to return the user

    const jwtSpy = jest.spyOn(jwt, "sign").mockReturnValue("mockToken"); // Mock the JWT sign function

    // Test login
    const res = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "correctpassword" }); // Provide correct credentials

    expect(res.status).toBe(200); // Expecting HTTP status 200
    expect(res.body.message).toBe("Login successful"); // Check the success message
    expect(res.headers['set-cookie']).toBeDefined(); // Ensure a cookie is set
    expect(jwtSpy).toHaveBeenCalledWith(
      { userId: user._id }, // Payload for the JWT
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Token expiration
    );

    jwtSpy.mockRestore(); // Restore the original JWT sign function
  });

  // Test case: Server error while processing the request
  it("should return 500 if there is a server error", async () => {
    mockingoose(User).toReturn(new Error("Database error"), "findOne"); // Mock User.findOne to throw an error

    const res = await request(app)
      .post("/login")
      .send({ email: "test@example.com", password: "password123" }); // Provide any credentials

    expect(res.status).toBe(500); // Expecting HTTP status 500
    expect(res.body.message).toBe("Server error"); // Check the error message
  });
});
