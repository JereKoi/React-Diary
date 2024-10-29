import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="about-container">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="about-header">
            <h1>About page.</h1>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default AboutPage;
