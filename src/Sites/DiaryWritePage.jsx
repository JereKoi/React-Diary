import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Folder from "../Sites/Components/Folder";
import Navbar from "./Components/NavBar";
import "./DiaryWriteStyle.css";

const DiaryWritePage = () => {
  const [newTitle, setNewTitle] = useState("");
  const [showEntries, setShowEntries] = useState(true);

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
    setNewTitle(e.target.value);
  };

  const handleCreateEntry = () => {
    console.log("Creating new entry with title:", newTitle);
    // Perform action to create new diary entry with newTitle
    setNewTitle("");
  };

  const toggleEntries = () => {
    setShowEntries(!showEntries);
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
        <button onClick={handleCreateEntry}>Create a new diary</button>
      </div>
      <h2 className="user-diaries-heading">Most recent diary</h2>
      <div className="most-recent-table">
        <div className="most-recent-table-heading">
          <p>What you have been writing to most recently.</p>
        </div>
      </div>
      <h2 className="user-diaries-heading">Your Diaries</h2>
      <div className="user-diaries">
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
        <>
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
        </>
      )}
    </div>
  );
};

export default DiaryWritePage;
