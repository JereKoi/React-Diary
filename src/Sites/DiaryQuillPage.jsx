import Navbar from "./Components/NavBar";
import TextEditor from "./Components/TextEditor";
import "./DiaryQuillPageStyle.css";

const DiaryQuillPage = () => {
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

export default DiaryQuillPage;
