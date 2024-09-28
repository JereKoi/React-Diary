import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedIn";
import TextEditor from "./Components/TextEditor";
import "./DiaryQuillPageStyle.css";

const DiaryQuillPage = () => {
  const [mostRecentDiary, setMostRecentDiary] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  const userDiaries = useMemo(
    () => [
      { id: 1, name: "Work Diary", type: "work" },
      { id: 2, name: "Travel Diary", type: "travel" },
      { id: 3, name: "Food Diary", type: "food" },
    ],
    []
  );

  useEffect(() => {
    if (userDiaries && userDiaries.length > 0) {
      setMostRecentDiary(userDiaries[0]);
    }
  }, [userDiaries]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add search logic here
  };

  const handleDiaryClick = (diary) => {
    setMostRecentDiary(diary);
  };

  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h2 className="most-recent-written-header">
        What you have been writing to most recently.
      </h2>
      <div className="most-recent-table">
        {mostRecentDiary && (
          <div className="most-recent-table-heading">
            <p>{mostRecentDiary.name}</p>
          </div>
        )}
      </div>
      <div className="diary-buttons-container">
        {userDiaries.map((diary) => (
          <button
            key={diary.id}
            onClick={() => handleDiaryClick(diary)}
            className="diary-button"
          >
            {diary.name}
          </button>
        ))}
      </div>
      <div className="date-picker-container">
        <label htmlFor="diary-date-picker">
          Select date for your diary entry:
        </label>
        <DatePicker
          id="diary-date-picker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          maxDate={new Date()} // Prevent future dates from being selectable
        />
      </div>
      <div className="TextEditorApp">
        <TextEditor selectedDate={selectedDate} />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default DiaryQuillPage;
