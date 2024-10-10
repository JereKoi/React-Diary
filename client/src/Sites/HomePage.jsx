import { lazy, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePageStyle.css";

const AbstractBackground = lazy(() => import("./Components/AbstractBackground/AbstractBackground"));
const Navbar = lazy(() => import("./Components/NavBarLoggedOff"));
const Footer = lazy(() => import("./Components/Footer"));

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/NextPage");
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
      section.classList.add("fade-in"); // Add the class on page load
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="home-container">
          <Navbar />

          <div className="box-container">
            <div className="box-content">
              <h1>Modern Journaling Experience</h1>
              <p>
                Your private space for reflection, self-discovery, and creative expression. Start your journey with a simple and secure diary.
              </p>
              <button
                className="cta-button"
                aria-label="Try the journaling app now"
                onClick={handleClick}
              >
                Try it now
              </button>
              <button
                className="secondary-button"
                aria-label="Learn more about the journaling app"
                onClick={() => navigate("/learn-more")}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="sections-container">
            <div className="scroll-section section-left">
              <h2>Features You'll Love</h2>
              <p>🔒 *Private and Secure*: Your thoughts stay safe with us.</p>
              <p>📝 *Daily Prompts*: Get inspiration when you need it most.</p>
              <p>🌈 *Custom Themes*: Design your diary to match your mood.</p>
            </div>

            <div className="scroll-section section-right">
              <h2>See What You Can Create</h2>
              <div className="journal-preview">
                <h3>Sample Entry</h3>
                <p>
                  Today was a mix of emotions. I felt energized in the morning but slowed down by the afternoon. The sunset reminded me that every day ends beautifully, no matter what.
                </p>
                <div className="mood-icons">😊 🌅</div>
              </div>
            </div>

            <div className="scroll-section section-left">
              <h2>Why Start Journaling?</h2>
              <p>
                Journaling helps you process thoughts, track personal growth, and discover new perspectives on life. Give it a try and see how daily reflection can transform your mindset.
              </p>
            </div>
          </div>

          <button
            className="fab"
            aria-label="Create new journal entry"
            onClick={() => navigate('/new-entry')}
          >
            +
          </button>

          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;
