import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedIn";
import "./DashboardStyle.css";

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>
          Dashboard
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

export default ContactPage;
