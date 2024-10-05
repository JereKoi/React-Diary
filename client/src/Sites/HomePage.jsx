import { useNavigate } from "react-router-dom";
import AbstractBackground from "./Components/AbstractBackground/AbstractBackground";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedOff";
import "./HomePageStyle.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NextPage"); // Update the route to the desired page.
  };

  return (
    <>
    <AbstractBackground />
    <div className="abstract-background">
      <div className="home-container">
        <div className="navBar">
          <Navbar />
        </div>

        <div className="box-container">
          <div className="box-content">
            <h1>Modern way for your diary</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="cta-button" onClick={handleClick}>
              Try it now
            </button>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
