// src/components/JournalCalendar.js
import React, { useState } from "react";
import "./JournalCalendar.css";

const JournalCalendar = () => {
  // Example data: Array of dates where the user has made journal entries.
  const [journalEntries, setJournalEntries] = useState([
    "2024-10-01",
    "2024-10-02",
    "2024-10-05",
    "2024-10-06",
    "2024-10-10",
    "2024-10-14",
  ]);

  const getDayClass = (date) => {
    // Check if the date is included in the journalEntries array
    return journalEntries.includes(date) ? "journal-entry" : "";
  };

  const renderCalendar = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const dates = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      return (
        <div key={day} className={`calendar-day ${getDayClass(date)}`}>
          {day}
        </div>
      );
    });

    return dates;
  };

  return (
    <div className="journal-calendar">
      <h3>Journaling Streak</h3>
      <div className="calendar-grid">{renderCalendar()}</div>
    </div>
  );
};

export default JournalCalendar;
