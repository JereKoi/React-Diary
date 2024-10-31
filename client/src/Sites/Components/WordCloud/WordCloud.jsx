import React from "react";
import "./WordCloud.css";

const WordCloud = ({ words }) => {
  const words1 = [
    { text: "Gratitude", style: "large" },
      { text: "Reflection", style: "medium rotated" },
      { text: "Joy", style: "large rotated" },
      { text: "Challenge", count: 10 },
      { text: "Mindfulness", style: "large rotated" },
      { text: "Growth", count: 13 },
      { text: "Peace", count: 9 },
      { text: "Hope", style: "large rotated" },
      { text: "Inspiration", style: "medium rotated" },
      { text: "Calm", count: 12 },
      { text: "Resilience", count: 7 },
      { text: "Motivation", count: 19 },
      { text: "Acceptance", count: 11 },
      { text: "Clarity", style: "medium rotated" },
      { text: "Strength", count: 8 },
      { text: "Courage", count: 6 },
      { text: "Reflection", count: 13 },
      { text: "Wellness", count: 12 },
      { text: "Balance", count: 15 },
      { text: "Healing", count: 9 },
      { text: "Adventure", count: 8 },
      { text: "Self-care", count: 14 },
      { text: "Mindset", style: "medium rotated" },
      { text: "Focus", style: "medium rotated" },
      { text: "Discovery", count: 10 },
      { text: "Compassion", count: 5 },
      { text: "Energy", count: 17 },
      { text: "Reflection", style: "medium rotated" },
      { text: "Patience", count: 7 },
      { text: "Insight", count: 6 },
      { text: "Creativity", count: 15 },
      { text: "Freedom", count: 10 },
      { text: "Kindness", count: 8 },
      { text: "Empathy", count: 5 },
      { text: "Awareness", count: 9 },
      { text: "Positivity", count: 14 },
      { text: "Focus", count: 10 },
      { text: "Gratitude", count: 18 },
      { text: "Reflection", style: "medium rotated" },
      { text: "Relaxation", count: 11 },
      { text: "Adventure", count: 13 },
      { text: "Curiosity", count: 8 },
      { text: "Dreams", count: 7 },
      { text: "Optimism", count: 16 },
      { text: "Self-love", count: 6 },
      { text: "Harmony", count: 9 },
      { text: "Passion", count: 10 },
      { text: "Hope", count: 13 },
      { text: "Discovery", count: 11 },
      { text: "Faith", count: 7 },
      { text: "Bravery", count: 5 },
      { text: "Connection", count: 12 },
    ];

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
