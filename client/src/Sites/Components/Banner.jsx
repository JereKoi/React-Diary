import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = ({ show, onClose }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (show) {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:5000/text");
          if (response.data) {
            setContent(response.data.content);
          }
        } catch (error) {
          console.error("Error fetching content:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="banner">
        <h2>Previous days</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>{content || "No content available"}</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Banner;
