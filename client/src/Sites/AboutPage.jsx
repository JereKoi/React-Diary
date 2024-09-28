import { useNavigate } from "react-router-dom";
import "./AboutPageStyle.css";
import Navbar from "./Components/NavBarLoggedIn";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>About page.</h1>
    </div>
  );
};

export default ContactPage;
