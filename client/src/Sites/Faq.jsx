import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./PrivacyPolicy.css";

const AbstractBackground = lazy(() => 
  import("./Components/AbstractBackground/AbstractBackground")
);

const Faq = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="policy-container">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="policy-header">
            <h1>FAQ.</h1>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;
