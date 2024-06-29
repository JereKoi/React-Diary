import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Clear user ID from local storage
    navigate("/LoginScreen"); // Redirect to login page
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
            onClick={() => navigate("/DiaryWritePage")}
          >
            Write
          </button>
          <button
            className="entries-btn"
            type="button"
            onClick={() => navigate("/DiaryEntriesPage")}
          >
            Diary entries
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
    </header>
  );
};

export default NavBar;
