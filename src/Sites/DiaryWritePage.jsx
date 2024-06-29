import Navbar from "./Components/NavBar"; // Fixed import
import "./DiaryQuillPageStyle.css";

const DiaryWritePage = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>
        Choose your folder to write to. And then choose if you want to write for
        today or some other date.
      </h1>
    </div>
  );
};

export default DiaryWritePage;
