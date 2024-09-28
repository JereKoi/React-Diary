import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarLoggedInStyle.css";

const NavBarLoggedIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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
            onClick={() => navigate("/DiaryQuillPage")}
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
        </div>
      </nav>
    </header>
  );
};

export default NavBarLoggedIn;
