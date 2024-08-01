import React from "react";
import Card from "./Card";

const Folder = ({ name, entries, onCardClick }) => {
  // Group entries by date
  const groupedEntries = entries.reduce((acc, entry) => {
    const date = entry.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(entry);
    return acc;
  }, {});

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedEntries).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  return (
    <div className="folder">
      <h2>{name}</h2>
      <div className="cards">
        {sortedDates.slice(0, 3).map((date) => (
          <Card
            key={date}
            date={date}
            entries={groupedEntries[date]}
            onClick={() => onCardClick(date)}
          />
        ))}
      </div>
    </div>
  );
};

export default Folder;
