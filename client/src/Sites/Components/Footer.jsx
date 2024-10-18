import React from 'react';
import { useNavigate } from "react-router-dom";
import './FooterStyle.css';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
            <div className="footer-content">
                <button className="footer-section" onClick={() => navigate("/AboutUsPage")}>
                    <h4>About Us</h4>
                    <p>Learn more about our company and team.</p>
                </button>
                <button className="footer-section" onClick={() => navigate("/")}>
                    <h4>Our Services</h4>
                    <p>Discover the services we offer to help you.</p>
                </button>
                <button className="footer-section" onClick={() => navigate("/PrivacyPolicy")}>
                    <h4>Privacy Policy</h4>
                    <p>Read our privacy policy to understand how we handle your data.</p>
                </button>
                <button className="footer-section" onClick={() => navigate("/ContactPage")}>
                    <h4>Get Help</h4>
                    <p>Need assistance? Contact our support team.</p>
                </button>
                <button className="footer-section" onClick={() => navigate("/Faq")}>
                    <h4>FAQ</h4>
                    <p>Find answers to frequently asked questions.</p>
                </button>
                <div className="footer-last">
                    <p>&copy; {new Date().getFullYear()} My Diary App. All rights reserved.</p>
                    <p>Follow us on:
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> X</a>,
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
