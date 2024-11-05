import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import "./Contact.css";
const AbstractBackground = lazy(() =>
  import("./Components/AbstractBackground/AbstractBackground")
);

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const messageInputRef = useRef(null);

  useEffect(() => {
    const messageInput = messageInputRef.current;

    if (messageInput) {
      const handleInput = () => {
        messageInput.style.height = "auto";
        messageInput.style.height = `${messageInput.scrollHeight}px`;
      };

      messageInput.addEventListener("input", handleInput);

      return () => {
        messageInput.removeEventListener("input", handleInput);
      };
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AbstractBackground />
      <div className="abstract-background">
        <div className="contactPage">
          <div className="navBar">
            <Navbar />
          </div>
          <div className="contactContainer">
            <div className="contactFormHeader">
              <h3>Contact Us</h3>
            </div>
            <form onSubmit={handleSubmit} className="contactForm">
              <div>
                <label className="name" htmlFor="name">
                  Name:
                </label>
                <input
                  className="nameInput"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="email" htmlFor="email">
                  Email:
                </label>
                <input
                  className="emailInput"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="subject" htmlFor="subject">
                  Subject:
                </label>
                <input
                  className="subjectInput"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="message" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="messageInput"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  ref={messageInputRef}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Contact;
