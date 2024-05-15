import { useNavigate } from "react-router-dom";
import "./NavBarStyle.css";

const NavBar = () => {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <header>
      className="navHeader"
      <button href="/" className="navLogo">
        Diary
      </button>
      <nav className="navBar">
        <button
          className="forgot-link"
          type="button"
          onClick={() => navigate("/ForgotForm")}
        >
          Home
        </button>
        <button
          className="forgot-link"
          type="button"
          onClick={() => navigate("/ForgotForm")}
        >
          Save the day
        </button>
        <button
          className="forgot-link"
          type="button"
          onClick={() => navigate("/ForgotForm")}
        >
          Load previous days
        </button>
        <button
          className="forgot-link"
          type="button"
          onClick={() => navigate("/ForgotForm")}
        >
          About
        </button>
        <button
          className="forgot-link"
          type="button"
          onClick={() => navigate("/ForgotForm")}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
