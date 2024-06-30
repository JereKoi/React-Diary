import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./DiaryEntriesStyle.css";

const DiaryEntriesPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to a search results page or perform other actions with searchTerm
    console.log("Searching for:", searchTerm);
    // Example navigation to another page
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
