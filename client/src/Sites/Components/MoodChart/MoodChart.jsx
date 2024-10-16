import "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import "./MoodChart.css"; // Import your CSS file

const MoodChart = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Mood Over Time",
        data: [3, 4, 5, 2, 4, 1, 5],
        borderColor: "#4caf50",
        borderWidth: 3,
        tension: 0.3, // Smooths the line curve
        backgroundColor: "rgba(76, 175, 80, 0.1)", // Light green fill
        pointBackgroundColor: "#4caf50", // Green dots
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (chartRef.current) observer.observe(chartRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mood-chart-container" ref={chartRef}>
      {isChartVisible && (
        <Line
          data={data}
          options={{
            animation: {
              duration: 2000,
              easing: "easeInOutExpo",
            },
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { size: 14 }, color: "#333" },
              },
              y: {
                grid: { display: true, color: "#e0e0e0" },
                ticks: {
                  font: { size: 14 },
                  color: "#333",
                  callback: (value) => {
                    // Map numerical y-values to mood emojis
                    const moodMap = {
                      1: "😢", // Very sad
                      2: "😔", // Sad
                      3: "😐", // Neutral
                      4: "🙂", // Happy
                      5: "😂", // Very happy
                    };
                    return moodMap[value] || value;
                  },
                },
                min: 1,
                max: 5,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default MoodChart;
