import React from "react";
import { Link } from "react-router-dom";
import { PlaneTakeoff, Phone } from "lucide-react"; 
import "./ContactAbout.css";

const ContactAbout = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // page top pe scroll karega
  };

  return (
    <div className="contact-cta-wrapper">
      <Link 
        to="/contact" 
        className="contact-cta-btn contact-cta-btn-primary" 
        onClick={handleClick}
      >
        <PlaneTakeoff className="contact-cta-icon" />
        Book Now
      </Link>

      <Link 
        to="/contact" 
        className="contact-cta-btn contact-cta-btn-outline" 
        onClick={handleClick}
      >
        <Phone className="contact-cta-icon" />
        Contact Us
      </Link>
    </div>
  );
};

export default ContactAbout;
