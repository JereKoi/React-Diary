import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);
const Navbar = lazy(() => import("./Components/NavBar/NavBarLoggedOff"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const MoodChart = lazy(() => import("./Components/MoodChart/MoodChart"));
const JournalCalendar = lazy(() =>
  import("./Components/JournalCalendar/JournalCalendar")
);
const WordCloud = lazy(() => import("./Components/WordCloud/WordCloud"));

const HomePage = () => {
  const navigate = useNavigate();
  const [sectionsReady, setSectionsReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  //Achievement badges click logic
  const showDetails = (message) => {
    console.log(message); // Replace this with any other logic you need.
  };

  const wordData = useMemo(
    () => [
      { text: "Gratitude", count: 20 },
      { text: "Reflection", count: 15 },
      { text: "Joy", count: 25 },
      { text: "Challenge", count: 10 },
      { text: "Mindfulness", count: 18 },
      { text: "Growth", count: 13 },
      { text: "Peace", count: 9 },
      { text: "Hope", count: 16 },
      { text: "Inspiration", count: 14 },
      { text: "Calm", count: 12 },
      { text: "Resilience", count: 7 },
      { text: "Motivation", count: 19 },
      { text: "Acceptance", count: 11 },
      { text: "Clarity", count: 10 },
      { text: "Strength", count: 8 },
      { text: "Courage", count: 6 },
      { text: "Reflection", count: 13 },
      { text: "Wellness", count: 12 },
      { text: "Balance", count: 15 },
      { text: "Healing", count: 9 },
      { text: "Adventure", count: 8 },
      { text: "Self-care", count: 14 },
      { text: "Mindset", count: 12 },
      { text: "Focus", count: 11 },
      { text: "Discovery", count: 10 },
      { text: "Compassion", count: 5 },
      { text: "Energy", count: 17 },
      { text: "Reflection", count: 13 },
      { text: "Patience", count: 7 },
      { text: "Insight", count: 6 },
      { text: "Creativity", count: 15 },
      { text: "Freedom", count: 10 },
      { text: "Kindness", count: 8 },
      { text: "Empathy", count: 5 },
      { text: "Awareness", count: 9 },
      { text: "Positivity", count: 14 },
      { text: "Focus", count: 10 },
      { text: "Gratitude", count: 18 },
      { text: "Reflection", count: 12 },
      { text: "Relaxation", count: 11 },
      { text: "Adventure", count: 13 },
      { text: "Curiosity", count: 8 },
      { text: "Dreams", count: 7 },
      { text: "Optimism", count: 16 },
      { text: "Self-love", count: 6 },
      { text: "Harmony", count: 9 },
      { text: "Passion", count: 10 },
      { text: "Hope", count: 13 },
      { text: "Discovery", count: 11 },
      { text: "Faith", count: 7 },
      { text: "Bravery", count: 5 },
      { text: "Connection", count: 12 },
      // Add more words based on the user's journaling data
    ],
    []
  );

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

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % featureCards.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featureCards.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
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
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add slide-in when element enters viewport
            entry.target.classList.add("slide-in");
          } else {
            // Remove slide-in when element exits viewport
            entry.target.classList.remove("slide-in");
          }
        });
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
        section.classList.add("slide-in");
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
              <h3 className="mood-chart-title">Daily reminders</h3>
              <p className="feature-description">
                Never forget to write in your journal! Set daily reminders to
                keep your journaling habit on track and make reflection a
                consistent part of your life. Customize your reminders to fit
                your schedule and get notified when it's time to write down your
                thoughts. These reminders serve as gentle nudges to help you
                pause and engage with your feelings, ensuring that you make time
                for self-reflection and personal growth every day.
              </p>
            </div>

            <div className="Analyze-icon mood-chart-wrapper">
              <i className="bx bx-bar-chart-alt-2"></i>
              <h3 className="mood-chart-title">Weekly Mood Tracker</h3>
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

              <div className="badges-container">
                <div
                  className="badge unlocked"
                  onClick={() => showDetails("30 Days of Journaling")}
                >
                  <span className="badge-icon">🏆</span>
                  <p>30 Days of Journaling</p>
                </div>
                <div
                  className="badge unlocked"
                  onClick={() => showDetails("Most Active Day: Sundays")}
                >
                  <span className="badge-icon">📅</span>
                  <p>Most Active Day: Sundays</p>
                </div>
                <div
                  className="badge unlocked"
                  onClick={() => showDetails("7 Entries with Positive Mood")}
                >
                  <span className="badge-icon">✨</span>
                  <p>7 Entries with Positive Mood</p>
                </div>
                <div className="badge locked">
                  <span className="badge-icon">🔒</span>
                  <p>Locked Badge</p>
                  <div className="tooltip">
                    Complete 5 more entries to unlock
                  </div>
                </div>
              </div>
            </div>
            <div className="word-cloud-section">
              <h2>Most Used Words</h2>
              <p className="word-cloud-description">
                Your most frequently used words provide a unique window into
                your thoughts, themes, and experiences over time. This word
                cloud reflects the language that resonates with you, showing
                patterns in your emotions, ideas, or recurring topics. It’s a
                simple yet powerful way to visualize the words that shape your
                journey, allowing you to notice shifts, moods, and areas of
                focus as you continue journaling.
              </p>
              <WordCloud words={wordData} />
            </div>
          </div>
          <div>
            <section
              id="mood-tracker"
              style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}
            ></section>
          </div>
          <div className="Hoem-end-section">
            <button
              className="home-page-end-button"
              onClick={() => navigate("/learn-more")}
            >
              Let's get your thoughts down
              <i className='bx bx-right-arrow-alt'></i>
            </button>
            <i className='bx bx-right-arrow-alt'></i>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;
