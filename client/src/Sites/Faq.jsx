import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./Faq.css";

const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const Faq = () => {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="faq-container">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="faq-header">
            <h1>Frequently Asked Questions (FAQ)</h1>

            <h3>1. What is Diary?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diary is
              a personal journaling app that allows you to record daily
              thoughts, track mood, and set goals. Our app provides a private
              and secure space for reflection and growth.
            </p>

            <h3>2. How do I create an account?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Creating
              an account is simple: tap “Sign Up” on the homepage, enter your
              email and create a password. You’ll be ready to start journaling
              in no time!
            </p>

            <h3>3. Is my data private and secure?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. User
              privacy is our top priority. All your entries are encrypted and
              securely stored, ensuring only you can access them.
            </p>

            <h3>4. Can I access my entries from multiple devices?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes, your
              account syncs across devices, so you can access your diary from
              any phone, tablet, or computer by logging into your account.
            </p>

            <h3>5. What should I do if I forget my password?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tap
              “Forgot Password” on the login page and follow the instructions to
              reset your password via email.
            </p>

            <h3>6. Can I customize my journaling experience?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Absolutely! We offer themes, font choices, and customizable
              layouts to make your journaling experience as personal and
              comfortable as possible.
            </p>

            <h3>7. How can I track my mood and goals?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diary
              includes a mood tracker and goal-setting tool. Access these
              features in your dashboard to add entries, set goals, and
              visualize your progress over time.
            </p>

            <h3>8. Can I delete or edit my entries?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes,
              simply go to your journal entry list, select an entry, and choose
              “Edit” or “Delete” as needed.
            </p>

            <h3>9. How much does the app cost?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We offer
              both a free version and a premium subscription with additional
              features. Check our pricing page for more information.
            </p>

            <h3>10. Who can I contact for support?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. For
              assistance, please reach out to our support team at [Contact
              Information]. We’re here to help with any questions or technical
              issues.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;
