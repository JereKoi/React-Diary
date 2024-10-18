import { useNavigate } from "react-router-dom";
import "./About.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBarLoggedOff";

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
