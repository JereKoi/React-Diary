import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarLoggedOffStyle.css";

const NavBarLoggedIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="nav-header">
      <nav className="nav-bar">
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
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
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      </nav>
    </header>
  );
};

export default NavBarLoggedIn;
