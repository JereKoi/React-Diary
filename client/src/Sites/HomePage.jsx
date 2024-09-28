import { useNavigate } from "react-router-dom";
import "./Components/AbstractBackground/AbstractBackgroundStyle.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedOff";
import "./HomePageStyle.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NextPage"); // Update the route to the desired page.
  };

  return (
    <div className="abstract-background">
      <div className="home-container">
        <div className="navBar">
          <Navbar />
        </div>

        <div className="diamond-container">
          <div className="diamond-content">
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

        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
