import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./ResetPasswordStyle.css";

const ContactPage = () => {
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
    </div>
  );
};

export default ContactPage;
