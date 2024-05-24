import Navbar from "./Components/NavBar"; // Fixed import
import TextEditor from "./Components/TextEditor";
import "./DiaryPageStyle.css";

const DiaryPage = () => {
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
