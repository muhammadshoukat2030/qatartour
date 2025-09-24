import React from "react";
import { Link } from "react-router-dom";
import { PlaneTakeoff, Phone } from "lucide-react"; 
import "./ContactAbout.css";

const ContactAbout = () => {
  return (
    <div className="contact-cta-wrapper">
      <Link to="/contact" className="contact-cta-btn contact-cta-btn-primary">
        <PlaneTakeoff className="contact-cta-icon" />
        Book Now
      </Link>
      <Link to="/contact" className="contact-cta-btn contact-cta-btn-outline">
        <Phone className="contact-cta-icon" />
        Contact Us
      </Link>
    </div>
  );
};

export default ContactAbout;
