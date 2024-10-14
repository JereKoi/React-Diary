import 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';

const MoodChart = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Mood Over Time',
        data: [3, 4, 5, 2, 4],
        borderColor: '#4caf50',
        borderWidth: 3,
        tension: 0.3, // Makes the line a bit smoother
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
    <div ref={chartRef} style={{ minHeight: '300px' }}>
      {isChartVisible && (
        <Line
          data={data}
          options={{
            animation: {
              duration: 2000,
              easing: 'easeInOutExpo',
            },
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { size: 14 } },
              },
              y: {
                grid: { display: true, color: '#e0e0e0' },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default MoodChart;
