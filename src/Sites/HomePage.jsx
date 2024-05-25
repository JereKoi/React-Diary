import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar"; // Fixed import
import "./HomePageStyle.css";

const ContactPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <div>
        <h1>Motivational quotes, reactive ways for user to interact...</h1>
      </div>
      <div className="navBar">
        <Navbar />
      </div>
    </div>
  );
};

export default ContactPage;
