### Diary website and app

![Screenshot of Homepage](https://github.com/JereKoi/React-Diary/blob/main/images/homepage_screenshot.png)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Some of the Planned Features](#Some-of-the-Planned-Features)
- [About Me](#about-me)
- [Contact Me](#contact-me)


## Introduction

Welcome to Diary, a MERN-based web app designed for personal journaling and diary-keeping. This repository hosts a full-stack project built with MongoDB, Express, React, and Node.js. The aim of this project is to offer a simple, intuitive space for users to record their thoughts and experiences.

## Why Diary Project?

- There aren't many diary web pages around. I personally use Google Forms to write about my days, but I figured, I wanted to create my own website for this. And I think I can develop this further, gather feedback, and possibly develop it with a larger audience in mind.

## Features

- Personalized Journaling: Create and manage daily entries with ease.
- User Authentication: Secure login system for personal diary access.
- Responsive Design: Mobile-friendly layout for seamless use on any device.

![Screenshot of Diariespage](https://github.com/JereKoi/React-Diary/blob/main/images/diaries_screenshot.png)

## Getting Started

Prerequisites

- Node.js (v20 LTS)
- npm or yarn
- MongoDB instance (local or hosted)

Installation

1. Clone the repository:

- git clone https://github.com/JereKoi/React-Diary.git

2. Install dependencies for both client and server:

- cd client
- npm install
- cd ../server
- npm install

## Running the Project

1. Start the client:

- cd client
- npm start

2. Start the server:

- cd server
- node server.js

(3. Starting local mongoDB server (For Linux))

- sudo systemctl start mongod

3. Environment Variables: Create a .env file in the server directory with the following keys:

- MONGODB_URI: Your MongoDB connection string. for example MONGODB_URI=mongodb://localhost:27017/your-db-name
- REACT_BACKEND_URL: URL where your server is hosted. For example localhost:3000 / 5000
- REACT_SOCKET_URL: URL for WebSocket communication (if applicable).
- JWT_SECRET: can be just written as secret and backend will run.

Make sure to replace the placeholder values with your actual configuration.

## Some of the Planned Features

- Dockerization: Simplified setup and deployment.
- Enhanced User Authentication: For added security.
- Analytics Dashboard: Visualize journaling trends and activity.
- Dark Mode: For a better night-time journaling experience.
- And more!

## About me

I am a software developer passionate about web development and creating intuitive user experiences. This project is a step towards building practical web applications and sharing my work with a broader audience.

## Contact Me

Have questions, suggestions, or feedback? I'd love to hear from you! Feel free to reach out via LinkedIn and email:
https://www.linkedin.com/in/jere-koivisto/
jerekoivisto7@gmail.com
