import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePageStyle.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);
const Navbar = lazy(() => import("./Components/NavBarLoggedOff"));
const Footer = lazy(() => import("./Components/Footer"));
const MoodChart = lazy(() => import("./Components/MoodChart/MoodChart"));

const HomePage = () => {
  const navigate = useNavigate();
  const [sectionsReady, setSectionsReady] = useState(false);

  const handleClick = () => {
    navigate("/NextPage");
  };

  useEffect(() => {
    // Trigger the observer setup after a small delay to ensure elements are rendered.
    const timer = setTimeout(() => setSectionsReady(true), 100);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!sectionsReady) return;

    const sections = document.querySelectorAll(".scroll-section");
    console.log("Sections found after delay:", sections.length);

    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isScrollingDown = window.scrollY > lastScrollY;

          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else if (!isScrollingDown) {
            entry.target.classList.remove("fade-in");
          }
        });

        lastScrollY = window.scrollY;
      },
      {
        threshold: window.innerWidth < 600 ? 0.01 : 0.075,
        rootMargin: "0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Manually check if any sections are in view on load.
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add("fade-in");
      }
    });

    return () => observer.disconnect();
  }, [sectionsReady]);

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
                Your private space for reflection, self-discovery, and creative
                expression. Start your journey with a simple and secure diary.
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
                  Today was a mix of emotions. I felt energized in the morning
                  but slowed down by the afternoon. The sunset reminded me that
                  every day ends beautifully, no matter what.
                </p>
                <div className="mood-icons">😊 🌅</div>
              </div>
            </div>

            <div className="scroll-section section-left">
              <h2>Why Start Journaling?</h2>
              <p>
                Journaling helps you process thoughts, track personal growth,
                and discover new perspectives on life. Give it a try and see how
                daily reflection can transform your mindset.
              </p>
            </div>
          </div>

          <button
            className="fab"
            aria-label="Create new journal entry"
            onClick={() => navigate("/new-entry")}
          >
            +
          </button>

          <div className="front-page-icons">
            <div className="daily-reminder-icon">
              <i className="bx bx-time"></i>
            </div>

            <div className="Analyze-icon">
              <i className="bx bx-bar-chart-alt-2"></i>
            </div>

            <div className="Track-icon">
              <i className="bx bx-notepad"></i>
            </div>
          </div>
          <div>
            <section
              id="mood-tracker"
              style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}
            ></section>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default HomePage;
