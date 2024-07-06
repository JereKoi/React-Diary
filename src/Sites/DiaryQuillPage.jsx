import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./Components/NavBar";
import TextEditor from "./Components/TextEditor";
import "./DiaryQuillPageStyle.css";

const DiaryQuillPage = () => {
  const [mostRecentDiary, setMostRecentDiary] = useState(null);

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

  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h2 className="most-recent-written-header">
        What you have been writing to most recently. Work Diary
      </h2>
      <div className="most-recent-table">
        {mostRecentDiary && (
          <div className="most-recent-table-heading">
            <p>{mostRecentDiary.name}</p>
          </div>
        )}
      </div>
      <div className="TextEditorApp">
        <TextEditor />
      </div>
    </div>
  );
};

export default DiaryQuillPage;
