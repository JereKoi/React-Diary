import { useNavigate } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header className="navHeader">
      <button className="navLogo" type="button" onClick={() => navigate("/")}>
        Diary
      </button>
      <nav className="navBar">
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
        <button className="Contact" type="button" onClick={() => navigate("/")}>
          Contact
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
