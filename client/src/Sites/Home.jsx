import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MilesStonesHome from "./Components/MilesStonesHome/MileStonesHome";
import "./Home.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);
const Navbar = lazy(() => import("./Components/NavBar/NavBar"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const MoodChart = lazy(() => import("./Components/MoodChart/MoodChart"));
const JournalCalendar = lazy(() =>
  import("./Components/JournalCalendar/JournalCalendar")
);
const WordCloud = lazy(() => import("./Components/WordCloud/WordCloud"));

const HomePage = () => {
  const navigate = useNavigate();
  const [sectionsReady, setSectionsReady] = useState(false);

  const featureCards = [
    {
      title: "Private and Secure",
      description: "🔒 Your thoughts stay safe with us.",
    },
    {
      title: "Daily Prompts",
      description: "📝 Get inspiration when you need it most.",
    },
    {
      title: "Custom Themes",
      description: "🌈 Design your diary to match your mood.",
    },
    {
      title: "Weekly Mood Tracker",
      description: "📊 Track your weekly mood patterns.",
    },
  ];

  useEffect(() => {
    // Trigger the observer setup after a small delay to ensure elements are rendered.
    const timer = setTimeout(() => setSectionsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Trigger the observer setup after a small delay to ensure elements are rendered.
    const timer = setTimeout(() => setSectionsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations. It adds a slide-in or fade-in class to elements when they come into view.
  // The observer is set up to trigger when the element is 7.5% visible in the viewport.
  // The observer is disconnected when the component unmounts.
  useEffect(() => {
    if (!sectionsReady) return;

    const scrollSections = document.querySelectorAll(".scroll-section");
    const frontPageIcons = document.querySelectorAll(".front-page-icons div");
    const endButton = document.querySelector(".home-page-end-button");
    const boxContents = document.querySelectorAll(".box-content");

    console.log("Scroll sections found:", scrollSections.length);
    console.log("Front page icons found:", frontPageIcons.length);
    console.log("End button found:", endButton ? "yes" : "no");
    console.log("Box contents found:", boxContents.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("scroll-section")) {
              entry.target.classList.add("slide-in");
              console.log("slide-in class added to:", entry.target);
            } else {
              entry.target.classList.add("fade-in");
              console.log("fade-in class added to:", entry.target);
            }
          } else {
            if (entry.target.classList.contains("scroll-section")) {
              entry.target.classList.remove("slide-in");
              console.log("slide-in class removed from:", entry.target);
            } else {
              entry.target.classList.remove("fade-in");
              console.log("fade-in class removed from:", entry.target);
            }
          }
        });
      },
      {
        threshold: window.innerWidth < 600 ? 0.01 : 0.075,
        rootMargin: "0px",
      }
    );

    // Observe elements
    scrollSections.forEach((section) => observer.observe(section));
    frontPageIcons.forEach((icon) => observer.observe(icon));
    if (endButton) observer.observe(endButton);
    boxContents.forEach((box) => observer.observe(box));

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
                onClick={() => navigate("/login")}
              >
                Try it now
              </button>
              <button
                className="secondary-button"
                aria-label="Learn more about the journaling app"
                onClick={() => navigate("/faq")}
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
              <p>
                ⏰ *Daily Reminders*: Set reminders and stay consistent with
                your journaling.
              </p>
              <p>🌈 *Custom Themes*: Design your diary to match your mood.</p>
            </div>

            <div className="scroll-section section-right">
              <h2>See What You Can Create</h2>
              <div className="journal-preview">
                <h3>Sample Entry</h3>
                <p>
                  Today was a mix of emotions. I felt energized in the morning
                  but slowed down by the afternoon. The sunset reminded me that
                  every day ends beautifully, no matter what.😊 🌅
                </p>
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
              <h3 className="daily-title">Daily reminders</h3>
              <p className="daily-description">
                Never forget to write in your journal! Set daily reminders to
                keep your journaling habit on track and make reflection a
                consistent part of your life. Customize your reminders to fit
                your schedule and get notified when it's time to write down your
                thoughts. These reminders serve as gentle nudges to help you
                pause and engage with your feelings, ensuring that you make time
                for self-reflection and personal growth every day.
              </p>
            </div>

            <div className="Analyze-icon">
              <i className="bx bx-bar-chart-alt-2"></i>
              <h3 className="mood-chart-header">Weekly Mood Tracker</h3>
              <h4 className="mood-chart-title">
                Analyze and Track Your Progress and Writing Style
              </h4>
              <p className="mood-description">
                Gain insights into your journaling patterns, explore trends in
                your mood and style, and see how your reflections have evolved
                over time. The weekly mood tracker allows you to visualize
                fluctuations in your emotions, helping you identify factors that
                influence your mood. By regularly monitoring these trends, you
                can enhance your self-awareness and make informed decisions
                about your mental well-being.
              </p>
              <h4 className="your-mood-trends-title">Your Mood Trends</h4>
              <MoodChart />
            </div>

            <div className="Track-icon">
              <i className="bx bx-notepad"></i>

              {/* Milestones */}
              <h4 className="milestones-title">Your Milestones</h4>
              <p className="milestones-description">
                Tracking milestones on your journaling journey highlights your
                growth, consistency, and key moments worth celebrating. Each
                badge earned here marks a significant achievement, whether it’s
                reaching a number of consecutive days, identifying patterns in
                your entries, or capturing positive moods. These milestones
                serve as gentle reminders of your progress and encourage you to
                keep going, helping you build a meaningful journaling habit over
                time.
              </p>

              <MilesStonesHome />
            </div>
            <div className="word-cloud-section">
              <h2 className="word-cloud-title">Most Used Words</h2>
              <p className="word-cloud-description">
                Your most frequently used words provide a unique window into
                your thoughts, themes, and experiences over time. This word
                cloud reflects the language that resonates with you, showing
                patterns in your emotions, ideas, or recurring topics. It’s a
                simple yet powerful way to visualize the words that shape your
                journey, allowing you to notice shifts, moods, and areas of
                focus as you continue journaling.
              </p>
              <WordCloud />
            </div>
          </div>
          <div className="home-end-section">
            <button
              className="home-page-end-button"
              onClick={() => navigate("/login")}
            >
              Let's get your thoughts down
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;
