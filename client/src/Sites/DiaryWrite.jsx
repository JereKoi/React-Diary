import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedIn";
import "./DiaryWrite.css";

const DiaryEntriesPage = () => {
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>Diary write page. Search by specific word or title</h1>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default DiaryEntriesPage;
