import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Folder from "./Components/Folder";
import Footer from "./Components/Footer";
import "./MoreDiariesPage.css";

const MoreDiariesPage = () => {
  const navigate = useNavigate();

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

  const userDiaries = useMemo(
    () => [
      { id: 1, name: "Work Diary", type: "work" },
      { id: 2, name: "Travel Diary", type: "travel" },
      { id: 3, name: "Food Diary", type: "food" },
    ],
    []
  );

  return (
    <div className="more-diaries-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <h2 className="user-diaries-heading">Your Diaries</h2>
      <div className="user-diaries">
        <div className="user-diary-list">
          {userDiaries.map((diary) => (
            <div key={diary.id} className={`user-diary ${diary.type}`}>
              <p>{diary.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="folders-grid">
        {folders.map((folder) => (
          <Folder
            key={folder.id}
            name={folder.name}
            entries={folder.entries}
          />
        ))}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default MoreDiariesPage;