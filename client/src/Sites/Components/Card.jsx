import React from "react";

const Card = ({ date, entries, onClick }) => {

  return (
    <div className="card" onClick={onClick}>
      <h3>{date}</h3>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.title}</strong>: {entry.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
