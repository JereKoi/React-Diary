import React from "react";
import Folder from "../Sites/Components/Folder"; // Import your Folder component
import Navbar from "./Components/NavBar"; // Adjust path as necessary
import "./DiaryWriteStyle.css"; // Import your CSS file

const DiaryWritePage = () => {
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

  return (
    <div className="folders-container">
      <Navbar />
      <div className="previous-entries-text">
        <h1>Your previous entries</h1>
      </div>
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
    </div>
  );
};

export default DiaryWritePage;
