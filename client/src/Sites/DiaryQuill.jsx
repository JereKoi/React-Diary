import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import TextEditor from "./Components/TextEditor/TextEditor";
import "./DiaryQuill.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

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
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="quillPage">
          <div className="navBar">
            <Navbar />
          </div>
          <h2 className="most-recent-written-header">Your Most Recent Diary</h2>
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
              Select Date for Your Entry:
            </label>
            <DatePicker
              id="diary-date-picker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              maxDate={new Date()}
              className="date-picker"
            />
          </div>
          <div className="text-editor-container">
            <TextEditor selectedDate={selectedDate} />
          </div>

        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default DiaryQuillPage;
