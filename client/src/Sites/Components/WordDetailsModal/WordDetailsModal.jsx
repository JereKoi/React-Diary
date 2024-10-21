import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./WordDetailsModal.css";

const WordDetailsModal = ({ isOpen, wordData, onClose }) => {
  if (!isOpen) return null;

  // Sample data for the timeline; this would come from your actual wordData
  const timelineData = [
    { date: "2024-01-01", count: 2 },
    { date: "2024-02-01", count: 4 },
    { date: "2024-03-01", count: 3 },
    { date: "2024-04-01", count: 5 },
    { date: "2024-05-01", count: 1 },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{wordData.text}</h2>
        <p>Count: {wordData.count}</p>
        
        <h3>Entries:</h3>
        <ul>
          {wordData.entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.date}</strong>: {entry.text}
            </li>
          ))}
        </ul>
        
        <h3>Timeline Visualization:</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={timelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WordDetailsModal;
