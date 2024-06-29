import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome imports
import React, { useState } from "react";
import Folder from "../Sites/Components/Folder"; // Adjust import path as necessary
import Navbar from "./Components/NavBar"; // Adjust import path as necessary
import "./DiaryWriteStyle.css"; // Adjust import path as necessary

const DiaryWritePage = () => {
  const [newTitle, setNewTitle] = useState(""); // State for new diary entry title
  const [showEntries, setShowEntries] = useState(true); // State for toggling entries visibility

  const userDiaries = [
    { id: 1, name: "Work Diary" },
    { id: 2, name: "Travel Diary" },
    { id: 3, name: "Food Diary" },
  ];

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

  const handleCardClick = (date) => {
    console.log(`Card clicked for date: ${date}`);
    // Handle the navigation or any action here
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value); // Update newTitle state with input value
  };

  const handleCreateEntry = () => {
    console.log("Creating new entry with title:", newTitle);
    // Perform action to create new diary entry with newTitle
    // Example: add new entry to folders state or send to backend, etc.
    setNewTitle(""); // Clear the input after submission if needed
  };

  const toggleEntries = () => {
    setShowEntries(!showEntries); // Toggle showEntries state
  };

  return (
    <div className="folders-container">
      <Navbar />
      <div className="new-entry-form">
        <input
          className="new-diary-title-input"
          type="text"
          placeholder="Enter new diary entry title"
          value={newTitle}
          onChange={handleTitleChange}
        />
        <button onClick={handleCreateEntry}>Create Entry</button>
      </div>

      <div className="user-diaries">
        <h2>Your Diaries</h2>
        <div className="user-diary-list">
          {userDiaries.map((diary) => (
            <div key={diary.id} className="user-diary">
              <p>{diary.name}</p>
            </div>
          ))}
        </div>
      </div>

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
};

export default DiaryWritePage;
