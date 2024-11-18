import React, { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import UserDiariesDisplay from "./Components/UserDiariesDisplay/UserDiariesDisplay";
import "./DiaryEntries.css";
const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const DiaryEntries = () => {
  const [mostRecentDiary, setMostRecentDiary] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [showEntries, setShowEntries] = useState(true);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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

  /*
  useEffect(() => {
    if (userDiaries && userDiaries.length > 0) {
      setMostRecentDiary(userDiaries[0]);
    }
  }, [userDiaries]);
  */

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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    navigate(`/search/${searchTerm}`);
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
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="diaryPage">
          <div className="navBar">
            <Navbar />
          </div>
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
          <h2 className="what-you-header">
            What you have been writing to most recently.
          </h2>
          {mostRecentDiary && (
            <div className="most-recent-table">
              <div className="most-recent-table-heading">
                <p>{mostRecentDiary.name}</p>
              </div>
            </div>
          )}
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              className="search-input"
              type="text"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search entries..."
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div className="your-diaries-container">
            <h2 className="user-diaries-heading">Your Diaries</h2>
            <button
              className="see-all-button"
              onClick={() => navigate("/MoreDiaries")}
            >
              See All
            </button>
          </div>
          <UserDiariesDisplay />
        </div>
        
      </div>
      <Footer />
    </Suspense>
  );
};

export default DiaryEntries;
