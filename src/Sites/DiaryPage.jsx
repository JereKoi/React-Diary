import { useNavigate } from "react-router-dom";
import TextEditor from "./Components/TextEditor";
import "./DiaryPageStyle.css";

const DiaryPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div className="TextEditorApp">
      <TextEditor />
    </div>
  );
};

export default DiaryPage;
