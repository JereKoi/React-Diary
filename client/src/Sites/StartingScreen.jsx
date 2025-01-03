import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./StartingScreen.css";

const StartingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleInteraction = () => {
      navigate("/login");
    };

    // Add a single event listener for both key press and mouse click
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    // Cleanup function for removing event listeners
    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [navigate]); // Dependency array

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate("/login")}
      onKeyDown={() => navigate("/login")}
      className="StartingScreen"
    >
      <div className="Diary">
        <header className="Diary-header">
          <div className="diary-content">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              This is my first diary.
            </motion.h1>
          </div>
          <div className="Blink">
            <h6>Press any key or click to continue...</h6>
          </div>
        </header>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default StartingScreen;
