import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedIn";
import "./DashboardStyle.css";

//This dashboard should include cool three elements user can select to go to different pages. They have to be styled in a way that they are easy to see and click on. Animation is important and stylish.

const DashboardPage = () => {
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

export default DashboardPage;
