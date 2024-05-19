import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar"; // Fixed import
import TextEditor from "./Components/TextEditor";
import "./DiaryPageStyle.css";

const DiaryPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="TextEditorApp">
        <TextEditor />
      </div>
    </div>
  );
};

export default DiaryPage;
