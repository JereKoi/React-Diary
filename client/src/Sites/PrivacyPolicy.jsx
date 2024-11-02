import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./PrivacyPolicy.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const PrivacyPolicy = () => {
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
            <h1>Privacy policy.</h1>
            <h1>Privacy Policy for Diary project</h1>

            <h3>Last updated: [Date]</h3>

            <h3>Introduction</h3>
            <p>
              At Diary project, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              what information we collect, how we use it, and the steps we take
              to ensure it remains private and secure. By using our app, you
              agree to the terms of this policy.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Personal Information:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Journal
              Entries: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Usage Data: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <h3>2. How We Use Your Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
              turpis et commodo pharetra, est eros bibendum elit, nec luctus
              magna felis sollicitudin mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <h3>3. Data Storage and Security</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel turpis a quam facilisis rutrum. Integer vel enim magna.
              Suspendisse potenti. Aenean vel bibendum justo, nec fringilla
              ligula. Nullam auctor, nisi a elementum eleifend, lectus lectus
              sodales felis, nec consectetur dolor eros eget ligula.
            </p>

            <h3>4. Sharing Your Information</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <h3>5. Your Rights and Choices</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
              amet tortor erat. Morbi dictum arcu at consectetur convallis.
              Fusce ut odio eros. Phasellus elementum, leo ac porta vehicula,
              purus leo dictum erat, at ornare justo orci id arcu. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <h3>7. Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. You can reach us at 
              [Contact Information].
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default PrivacyPolicy;
