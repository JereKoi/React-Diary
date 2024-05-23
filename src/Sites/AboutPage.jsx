import { useNavigate } from "react-router-dom";
import "./AboutPageStyle.css";
import Navbar from "./Components/NavBar"; // Fixed import

const ContactPage = () => {
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
    </div>
  );
};

export default ContactPage;
