import { useNavigate } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <div className="nav-buttons">
          <button
            className="Home"
            type="button"
            onClick={() => navigate("/HomePage")}
          >
            Home
          </button>
          <button
            className="Write"
            type="Write"
            onClick={() => navigate("/DiaryPage")}
          >
            Write
          </button>
          <button className="Load" type="button">
            Load previous days
          </button>
          <button
            className="About"
            type="button"
            onClick={() => navigate("/AboutPage")}
          >
            About
          </button>
          <button
            className="Contact"
            type="button"
            onClick={() => navigate("/ContactPage")}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
