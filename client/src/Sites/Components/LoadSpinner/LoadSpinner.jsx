import React from "react";
import "./LoadSpinner.css"; // Add styling as necessary

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </div>
  );
}

export default LoadingSpinner;
