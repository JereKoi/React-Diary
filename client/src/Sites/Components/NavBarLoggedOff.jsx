import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarLoggedOffStyle.css";

const NavBarLoggedOff = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false); // Toggle mobile menu

  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="bx bx-menu"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </button>

        <div className={isMobile ? "nav-buttons-mobile" : "nav-buttons"}>
          <button
            className="home-btn"
            type="button"
            onClick={() => {
              navigate("/HomePage");
              setIsMobile(false); // Close menu on navigation
            }}
          >
            Home
          </button>
          <button
            className="write-btn"
            type="button"
            onClick={() => {
              navigate("/DiaryQuillPage");
              setIsMobile(false);
            }}
          >
            Write
          </button>
          <button
            className="entries-btn"
            type="button"
            onClick={() => {
              navigate("/DiaryEntriesPage");
              setIsMobile(false);
            }}
          >
            Diaries
          </button>
          <button
            className="about-btn"
            type="button"
            onClick={() => {
              navigate("/AboutPage");
              setIsMobile(false);
            }}
          >
            About
          </button>
          <button
            className="contact-btn"
            type="button"
            onClick={() => {
              navigate("/ContactPage");
              setIsMobile(false);
            }}
          >
            Contact
          </button>
          <button
            className="mobile-menu-icon"
            type="button"
            onClick={() => {
              navigate("/LoginScreen");
              setIsMobile(false);
            }}
          ></button>
        </div>
      </nav>
    </header>
  );
};

export default NavBarLoggedOff;
