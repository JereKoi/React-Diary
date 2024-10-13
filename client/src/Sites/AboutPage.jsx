import { useNavigate } from "react-router-dom";
import "./AboutPageStyle.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedOff";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="navBar">
        <Navbar />
      </div>
      <div className="about-header">
      <h1>About page.</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
