import "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import "./MoodChart.css"; // Import your CSS file

const MoodChart = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Mood Over Time",
        data: [3, 4, 5, 2, 4, 1, 5],
        borderColor: "#61dafb",
        borderWidth: 3,
        tension: 0.3, // Smooths the line curve
        pointBackgroundColor: "#61dafb", // Green dots
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
      { threshold: 0.5 }
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
            responsive: true,
            maintainAspectRatio: false, // Ensures the chart adjusts to the container's size
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
                ticks: { font: { size: 14 }, color: "#ffffff" },
              },
              y: {
                grid: { display: true, color: "#e0e0e0" },
                ticks: {
                  font: { size: 14 },
                  callback: (value) => {
                    const moodMap = {
                      1: "😢",
                      2: "😔",
                      3: "😐",
                      4: "🙂",
                      5: "😂",
                    };
                    return moodMap[value] || value;
                  },
                },
                min: 1,
                max: 5,
                padding: 20,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default MoodChart;
