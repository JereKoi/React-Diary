import React, { memo } from "react";
import "./WordCloud.css";

const WordCloud = memo(() => {
  const words = [
    { text: "Gratitude", style: "large" },
    { text: "Reflection", style: "medium" },
    { text: "Joy", style: "large" },
    { text: "Challenge", style: "medium" },
    { text: "Mindfulness", style: "large" },
    { text: "Growth", style: "medium" },
    { text: "Peace", style: "small" },
    { text: "Hope", style: "large" },
    { text: "Inspiration", style: "medium" },
    { text: "Calm", style: "medium" },
    { text: "Resilience", style: "small" },
    { text: "Motivation", style: "large" },
    { text: "Acceptance", style: "medium" },
    { text: "Clarity", style: "medium" },
    { text: "Strength", style: "small" },
    { text: "Courage", style: "small" },
    { text: "Wellness", style: "medium" },
    { text: "Balance", style: "large" },
    { text: "Healing", style: "small" },
    { text: "Adventure", style: "small" },
    { text: "Self-care", style: "large" },
    { text: "Mindset", style: "medium" },
    { text: "Focus", style: "medium" },
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

  return (
    <div className="word-cloud" aria-label="Word Cloud">
      {words.map((word, index) => (
        <span key={index} className={`word ${word.style}`} aria-label={word.text}>
          {word.text}
        </span>
      ))}
    </div>
  );
});


export default memo(WordCloud);
