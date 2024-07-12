import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/NavBar";
import "./ContactStyle.css";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    <div>
      <div className="navBar">
        <Navbar />
      </div>
      <div className="contactFormContainer">
        <div className="contactFormHeader">
          <h3>Contact Us</h3>
        </div>
        <form onSubmit={handleSubmit} className="contactForm">
          <div >
            <label className="name" htmlFor="name">Name:</label>
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
            <label className="email" htmlFor="email">Email:</label>
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
            <label className="subject" htmlFor="subject">Subject:</label>
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
            <label className="message" htmlFor="message">Message:</label>
            <textarea
              className="messageInput"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
