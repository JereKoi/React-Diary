import { useNavigate } from "react-router-dom";
import "./AboutPageStyle.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedOff";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <h1>About page.</h1>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
