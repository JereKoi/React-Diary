import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AbstractBackground from "./Components/AbstractBackground/AbstractBackground";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBarLoggedOff";
import "./HomePageStyle.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NextPage"); // Update the route to the desired page.
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Cleanup on component unmount
  }, []);

  return (
    <>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="home-container">
          <div className="navBar">
            <Navbar />
          </div>

          <div className="box-container">
            <div className="box-content">
              <h1>Modern way for your diary</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="cta-button" onClick={handleClick}>
                Try it now
              </button>
            </div>
          </div>

          <div className="sections-container">
            <div className="scroll-section section-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas odio, vitae scelerisque enim ligula venenatis dolor.
                Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet mauris morbi in dui quis est pulvinar
                ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa.
              </p>
              <p>
                Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi
                mi. Quisque nisl felis, venenatis tristique, dignissim in,
                ultrices sit amet, augue. Proin sodales libero eget ante. Nulla
                quam. Aenean laoreet.
              </p>
            </div>

            <div className="scroll-section section-right">
              <p>
                In hac habitasse platea dictumst. Praesent vestibulum tempor
                augue, vel egestas nulla commodo quis. Aenean vehicula vehicula
                aliquam. Proin faucibus arcu quis ante. In consectetuer turpis
                ut velit. Aenean posuere, tortor sed cursus feugiat, nunc augue
                blandit nunc, eu sollicitudin urna dolor sagittis lacus.
              </p>
              <p>
                Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
                nisi. Etiam vitae tortor. Donec posuere vulputate arcu.
                Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae.
              </p>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
