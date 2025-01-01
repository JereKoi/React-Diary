import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBarLoggedIn";
import "./DiaryWrite.css";

const DiaryWrite = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>Diary write page. Search by specific word or title</h1>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default DiaryWrite;
