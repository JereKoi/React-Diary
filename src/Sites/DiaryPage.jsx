import { useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import "./DiaryPageStyle.css";

const DiaryPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <NavBar />
      <main>
        <h1>Welcome to the Home Page</h1>
        {/* Other content of the home page goes here */}
      </main>
    </div>
  );
};

export default DiaryPage;
