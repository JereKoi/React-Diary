import { useState } from "react";
import "./FeatureSlider.css";

const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: "bx bx-time",
      title: "Daily Reminders",
      description:
        "Never forget to write in your journal! Set daily reminders to keep your journaling habit on track and make reflection a consistent part of your life. Customize your reminders to fit your schedule and get notified when it's time to write down your thoughts.",
    },
    {
      icon: "bx bx-bar-chart-alt-2",
      title: "Weekly Mood Tracker",
      component: <MoodChart />,
      description: "Track your weekly mood trends with an interactive chart. Explore your emotional journey over time and gain deeper insights into your daily reflections.",
    },
    {
      icon: "bx bx-notepad",
      title: "Analyze Your Progress",
      description:
        "Gain insights into your journaling patterns, explore trends in your mood and style, and see how your reflections have evolved over time. Discover new ways to grow.",
      component: (
        <div>
          <h4>Your Mood Trends</h4>
          <small>(Last 7 days)</small>
          <MoodChart />
          <button
            className="explore-button"
            onClick={() => navigate("/analytics")}
          >
            Explore Your Insights
          </button>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="feature-slider">
      <div className="slider-content">
        <i className={features[currentIndex].icon}></i>
        <h3 className="feature-title">{features[currentIndex].title}</h3>
        <p className="feature-description">
          {features[currentIndex].description}
        </p>
        {features[currentIndex].component && (
          <div className="feature-component">
            {features[currentIndex].component}
          </div>
        )}
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} aria-label="Previous feature">
          &larr;
        </button>
        <button onClick={handleNext} aria-label="Next feature">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default FeatureSlider;
