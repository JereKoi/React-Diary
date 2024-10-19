import { motion } from "framer-motion";
import React from "react";
import "./LoadSpinner.css";

function LoadingSpinner() {
  return (
    <motion.div
      className="loading-spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="spinner"></div>
      <p>Loading, please wait...</p>
    </motion.div>
  );
}

export default LoadingSpinner;
