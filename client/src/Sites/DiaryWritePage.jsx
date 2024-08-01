import Navbar from "./Components/NavBar";
import "./DiaryWriteStyle.css";

const DiaryEntriesPage = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>Diary write page. Search by specific word or title</h1>
    </div>
  );
};

export default DiaryEntriesPage;
