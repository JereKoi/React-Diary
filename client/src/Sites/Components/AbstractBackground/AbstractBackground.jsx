import React, { useEffect, useState } from "react";
import './AbstractBackgroundStyle.css';

const AbstractBackground = () => {
  const [gradient, setGradient] = useState("");

  // Function to generate random RGB colors
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Generate random gradient on component mount
  useEffect(() => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();

    const newGradient = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 75%, ${color4} 100%)`;
    setGradient(newGradient);
  }, []);

  // CSS-in-JS styles with animation
  const backgroundStyle = {
    width: "100vw",
    height: "100vh",
    background: gradient,
    backgroundSize: "200% 200%",
    animation: "animateBackground 15s ease infinite",
  };

  return (
    <div style={backgroundStyle}>
      {/* Content of the component goes here */}
    </div>
  );
};

export default AbstractBackground;
