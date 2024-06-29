import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./DiaryEntriesStyle.css";

const ContactPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>Diary entries page.</h1>
    </div>
  );
};

export default ContactPage;
