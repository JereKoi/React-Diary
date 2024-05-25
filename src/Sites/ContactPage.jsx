import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar"; // Fixed import
import "./ContactStyle.css";

const ContactPage = () => {
  <h3>This is Contact page</h3>;
  const navigate = useNavigate(); // Get the navigate function
  return (
    <div>
      <div className="navBar">
        <h3>This is Contact page</h3>
        <Navbar />
      </div>
      <div></div>
    </div>
  );
};

export default ContactPage;
