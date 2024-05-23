import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar"; // Fixed import
import "./ContactPageStyle.css";

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
