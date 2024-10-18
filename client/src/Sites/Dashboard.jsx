import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import "./Components/HomeBackground/HomeCard.css"; // Import card styles
import Navbar from "./Components/NavBarLoggedIn";
import "./Dashboard.css";

// Check if user returns say welcome back on title, if user comes back after
// long time then say welcome back. For often returning users, randomize the
// greeting message.

// Dashboard with three clickable cards that navigate to different pages
const DashboardPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path); // Navigate to different pages on card click
  };

  return (
    <div className="dashboard-container">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="navBar">
        <Navbar />
      </div>

      {/* Flex container to hold the cards */}
      <div className="card-container">
        <div className="card" onClick={() => handleCardClick("/page1")}>
          <div className="card-content">
            <h2>Page 1</h2>
            <p>Go to Page 1</p>
          </div>
        </div>
        <div className="card" onClick={() => handleCardClick("/page2")}>
          <div className="card-content">
            <h2>Page 2</h2>
            <p>Go to Page 2</p>
          </div>
        </div>
        <div className="card" onClick={() => handleCardClick("/page3")}>
          <div className="card-content">
            <h2>Page 3</h2>
            <p>Go to Page 3</p>
          </div>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
