import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./DiaryEntriesStyle.css";

const DiaryEntriesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>Diary entries page. Search by specific word or title</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search entries..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default DiaryEntriesPage;
