import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBarLoggedIn";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>
          Reset password
        </h1>
      </div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResetPassword;
