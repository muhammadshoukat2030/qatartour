import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2>Qatar Tours</h2>
          <p>
            Explore Qatar with us! We provide the best tour packages,
            desert safari, and city tours for an unforgettable experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/city-tour">City Tour</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/desert-safari">Desert Safari</Link></li>
            <li><Link to="/half-day">Half Day Tour</Link></li>
            <li><Link to="/full-day">Full Day Tour</Link></li>
            <li><Link to="/qatar-packages">Qatar Packages</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
            
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Qatar Tours. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
