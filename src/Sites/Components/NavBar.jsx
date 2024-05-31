import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId"); // Assume user ID is stored in local storage
        if (userId) {
          const response = await axios.get(
            `http://localhost:5000/user/${userId}`
          );
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setError(error.message);
      }
    };

    fetchUser();
  }, []);

  const handleButtonClick = () => {
    setShowBanner(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Clear user ID from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <div className="nav-buttons">
          <button
            className="home-btn"
            type="button"
            onClick={() => navigate("/HomePage")}
          >
            Home
          </button>
          <button
            className="write-btn"
            type="Write"
            onClick={() => navigate("/DiaryPage")}
          >
            Write
          </button>
          <button
            className="load-btn"
            type="button"
            onClick={handleButtonClick}
          >
            Load previous days
          </button>
          <button
            className="about-btn"
            type="button"
            onClick={() => navigate("/AboutPage")}
          >
            About
          </button>
          <button
            className="contact-btn"
            type="button"
            onClick={() => navigate("/ContactPage")}
          >
            Contact
          </button>
          <div className="user-info">
            {user && <span>Logged in as: {user.username}</span>}
            <button className="logout-btn" type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <Banner show={showBanner} onClose={handleCloseBanner} />
    </header>
  );
};

export default NavBar;
