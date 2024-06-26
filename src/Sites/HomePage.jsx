import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./HomePageStyle.css";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>
          Motivational quotes, reactive ways for user to interact, gamefied
          achievements...
        </h1>
      </div>
      <div className="navBar">
        <Navbar />
      </div>
    </div>
  );
};

export default ContactPage;
