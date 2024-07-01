import Navbar from "./Components/NavBar";
import TextEditor from "./Components/TextEditor";
import "./DiaryQuillPageStyle.css";

const DiaryQuillPage = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h2 className="most-recent-written-header">Most recent diary</h2>
      <div className="most-recent-table">
        <div className="most-recent-table-written-heading">
          <p>What you have been writing to most recently.</p>
        </div>
      </div>
      <div className="TextEditorApp">
        <TextEditor />
      </div>
    </div>
  );
};

export default DiaryQuillPage;
