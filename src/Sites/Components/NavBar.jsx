import { useNavigate } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <div className="nav-buttons">
          <button className="Home" type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <button className="Save" type="button" onClick={() => navigate("/")}>
            Save the text
          </button>
          <button className="Load" type="button" onClick={() => navigate("/")}>
            Load previous days
          </button>
          <button className="About" type="button" onClick={() => navigate("/")}>
            About
          </button>
          <button
            className="Contact"
            type="button"
            onClick={() => navigate("/")}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
