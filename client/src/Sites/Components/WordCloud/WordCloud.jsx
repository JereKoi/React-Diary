import React, { useEffect } from "react";
import "./WordCloud.css";

const WordCloud = () => {
  const words = [
    { text: "Gratitude", style: "large" },
    { text: "Reflection", style: "medium rotated" },
    { text: "Joy", style: "large rotated" },
    { text: "Challenge", style: "medium" },
    { text: "Mindfulness", style: "large rotated" },
    { text: "Growth", style: "medium" },
    { text: "Peace", style: "small" },
    { text: "Hope", style: "large rotated" },
    { text: "Inspiration", style: "medium rotated" },
    { text: "Calm", style: "medium" },
    { text: "Resilience", style: "small" },
    { text: "Motivation", style: "large" },
    { text: "Acceptance", style: "medium" },
    { text: "Clarity", style: "medium rotated" },
    { text: "Strength", style: "small" },
    { text: "Courage", style: "small" },
    { text: "Wellness", style: "medium" },
    { text: "Balance", style: "large" },
    { text: "Healing", style: "small" },
    { text: "Adventure", style: "small" },
    { text: "Self-care", style: "large" },
    { text: "Mindset", style: "medium rotated" },
    { text: "Focus", style: "medium rotated" },
    { text: "Discovery", style: "medium" },
    { text: "Compassion", style: "small" },
    { text: "Energy", style: "large" },
    { text: "Patience", style: "small" },
    { text: "Insight", style: "small" },
    { text: "Creativity", style: "large" },
    { text: "Freedom", style: "medium" },
    { text: "Kindness", style: "small" },
    { text: "Empathy", style: "small" },
    { text: "Awareness", style: "small" },
    { text: "Positivity", style: "large" },
    { text: "Relaxation", style: "medium" },
    { text: "Curiosity", style: "small" },
    { text: "Dreams", style: "small" },
    { text: "Optimism", style: "large" },
    { text: "Self-love", style: "small" },
    { text: "Harmony", style: "small" },
    { text: "Passion", style: "medium" },
    { text: "Faith", style: "small" },
    { text: "Bravery", style: "small" },
    { text: "Connection", style: "medium" },
  ];

  useEffect(() => {
    function adjustWordSizes() {
      const container = document.querySelector(".word-cloud");
      const words = container.querySelectorAll(".word");

      words.forEach(word => {
        let fontSize = parseFloat(window.getComputedStyle(word).fontSize);

        // Reduce font size until the word fits within the container
        while (isOverflowing(word, container) && fontSize > 8) {
          fontSize -= 0.5;
          word.style.fontSize = `${fontSize}px`;
        }
      });
    }

    function isOverflowing(element, container) {
      const elementRect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      return (
        elementRect.right > containerRect.right ||
        elementRect.bottom > containerRect.bottom
      );
    }

    // Run adjustWordSizes on mount and window resize
    adjustWordSizes();
    window.addEventListener("resize", adjustWordSizes);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", adjustWordSizes);
  }, []);

  return (
    <div className="word-cloud">
      {words.map((word, index) => (
        <span key={index} className={`word ${word.style}`}>
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
