import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import Navbar from "./Components/NavBar";
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

  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h2 className="most-recent-written-header">
        What you have been writing to most recently.
      </h2>

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
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search entries..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="TextEditorApp">
        <TextEditor selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default DiaryQuillPage;
