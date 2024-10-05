import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBarLoggedOffStyle.css";

const NavBarLoggedOff = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false); // Toggle mobile menu
  const [isHidden, setIsHidden] = useState(false); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Store the last scroll position

// Effect to handle window resizing
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(false); // Reset mobile menu when screen size is larger than 768px
    }
  };

  // Add event listener
  window.addEventListener("resize", handleResize);

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

// Effect to handle scroll behavior
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if scrolling down
    if (currentScrollY > lastScrollY) {
      setIsHidden(true); // Hide navbar
    } else {
      setIsHidden(false); // Show navbar
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);

  return (
    <header className="nav-header">
      <nav className={`nav-bar ${isHidden ? "hidden" : ""}`}>
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
