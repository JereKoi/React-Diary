import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Folder from "../Folder";
import "./PreviousEntriesDisplay.css";

const PreviousEntriesDisplay = () => {
  const [showEntries, setShowEntries] = useState(true);
  const [mostRecentDiary, setMostRecentDiary] = useState(null);

  const folders = [
    {
      id: 1,
      name: "Personal 1",
      entries: [
        {
          id: 2,
          date: "2024-06-30",
          title: "Personal Diary Entry 1",
          content: "Visited the gym today.",
        },
        {
          id: 3,
          date: "2024-06-29",
          title: "Personal Diary Entry 2",
          content: "Watched a movie.",
        },
      ],
    },
    {
      id: 2,
      name: "Personal 2",
      entries: [
        {
          id: 4,
          date: "2024-06-30",
          title: "Personal Diary Entry 1",
          content: "Visited the gym today.",
        },
        {
          id: 5,
          date: "2024-06-29",
          title: "Personal Diary Entry 2",
          content: "Watched a movie.",
        },
      ],
    },
    {
      id: 3,
      name: "Personal 3",
      entries: [
        {
          id: 6,
          date: "2024-06-30",
          title: "Personal Diary Entry 1",
          content: "Visited the gym today.",
        },
        {
          id: 7,
          date: "2024-06-29",
          title: "Personal Diary Entry 2",
          content: "Watched a movie.",
        },
      ],
    },
  ];

  const toggleEntries = () => {
    setShowEntries(!showEntries);
  };

  const handleCardClick = (date) => {
    console.log(`Card clicked for date: ${date}`);
    // Handle the navigation or any action here
  };

  useEffect(() => {
    if (folders.length > 0) {
      const mostRecent = folders
        .flatMap((folder) => folder.entries)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      setMostRecentDiary(mostRecent);
    }
  }, []);

  return (
    <div>
      <div className="previous-entries-text">
        <h1>Your previous entries</h1>
        <button className="toggle-entries-button" onClick={toggleEntries}>
          <FontAwesomeIcon icon={showEntries ? faEyeSlash : faEye} />
        </button>
      </div>
      {showEntries && (
        <div className="folders-horizontal">
          {folders.map((folder) => (
            <Folder
              key={folder.id}
              name={folder.name}
              entries={folder.entries}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default PreviousEntriesDisplay;