import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import TextEditor from "./Components/TextEditor/TextEditor";
import UserDiariesDisplay from "./Components/UserDiariesDisplay/UserDiariesDisplay";
import "./DiaryQuill.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const DiaryQuill = () => {
  const [mostRecentDiary, setMostRecentDiary] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
          <h2 className="most-recent-written-header-quill">Your Most Recent Diary</h2>
          <div className="most-recent-table-quill">
            {mostRecentDiary && (
              <div className="most-recent-table-heading-quill">
                <p>{mostRecentDiary.name}</p>
              </div>
            )}
          </div>
          <h2 className="user-diary-heading-quill">Your Diaries</h2>
          <button
            className="see-all-button-quill"
            onClick={() => navigate("/MoreDiaries")}
          >
            See All
          </button>
          <UserDiariesDisplay/>
          <div className="date-picker-container-quill">
            <label htmlFor="diary-date-picker">
              Select Date for Your Entry:
            </label>
            <DatePicker
              id="diary-date-picker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="d, MMMM, yyyy"
              maxDate={new Date()}
              className="date-picker-quill"
            />
          </div>
          <div className="text-editor-container-quill">
            <TextEditor selectedDate={selectedDate} />
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default DiaryQuill;
