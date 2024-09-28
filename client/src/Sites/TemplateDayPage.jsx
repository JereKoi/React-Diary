import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedIn";
import "./TemplateDayStyle.css";

const TemplateDayPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <div className="navBar">
        <Navbar />
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
        <div className="Template">
          <h1>
            Here comes the content of clicked diary from the date written.
          </h1>
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default TemplateDayPage;
