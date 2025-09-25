import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  // Scroll to top when navigating
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / About */}
        <div className="footer-section">
          <h2>Gulf Dunes Tourism</h2>
          <p>
            Explore Qatar with us! We provide the best tour packages,
            desert safari, and city tours for an unforgettable experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={() => handleNavigation("/")}>Home</button></li>
            <li><button onClick={() => handleNavigation("/about")}>About Us</button></li>
            <li><button onClick={() => handleNavigation("/city-tour")}>City Tour</button></li>
            <li><button onClick={() => handleNavigation("/contact")}>Contact</button></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><button onClick={() => handleNavigation("/desert-safari")}>Desert Safari</button></li>
            <li><button onClick={() => handleNavigation("/half-day")}>Half Day Tour</button></li>
            <li><button onClick={() => handleNavigation("/full-day")}>Full Day Tour</button></li>
            <li><button onClick={() => handleNavigation("/qatar-packages")}>Qatar Packages</button></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
  <h3>Follow Us</h3>
  <div className="social-links">
    <a className="facebook" href="https://www.facebook.com/share/1FmaevVAJY/" target="_blank" rel="noreferrer">
      <FaFacebook /> Facebook
    </a>
    <a className="instagram" href="https://www.instagram.com/gulfdunestourism?igsh=MWN6a2xwOTRqZXJiNw==" target="_blank" rel="noreferrer">
      <FaInstagram /> Instagram
    </a>
    <a className="youtube" href="https://www.youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube /> YouTube
    </a>
    <a className="tiktok" href="https://www.tiktok.com" target="_blank" rel="noreferrer">
      <FaTiktok /> TikTok
    </a>
  </div>
</div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gulf Dunes Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
