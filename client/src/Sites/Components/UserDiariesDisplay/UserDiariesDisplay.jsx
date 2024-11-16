import React, { useMemo } from "react";
import "./UserDiariesDisplay.css";

const UserDiariesDisplay = () => {


  const userDiaries = useMemo(
    () => [
      { id: 1, name: "Work Diary", type: "work" },
      { id: 2, name: "Travel Diary", type: "travel" },
      { id: 3, name: "Food Diary", type: "food" },
    ],
    []
  );

  return (
    <div>
      <div className="user-diaries">
        <div className="user-diary-list">
          {userDiaries.map((diary) => (
            <div key={diary.id} className={`user-diary ${diary.type}`}>
              <p>{diary.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDiariesDisplay;
