import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBarLoggedOff";
import "./HomePageStyle.css";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>
          Write your own story.
        </h1>
      </div>
      <div className="navBar">
        <Navbar />
      </div>
    </div>
  );
};

export default ContactPage;
