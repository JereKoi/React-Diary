import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./TermsOfService.css";

const AbstractBackground = lazy(() => 
  import("./Components/AbstractBackground/AbstractBackground")
);

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="terms-container">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="terms-header">
            <h1>Terms of Service.</h1>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default PrivacyPolicy;
