import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import {
  
  FaUmbrellaBeach,
  FaCity,
  FaTheaterMasks,
  FaPlaneDeparture,
  FaHotel,
} from "react-icons/fa";

import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${assets.contact})` }}
      >
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            Adventure Time Tourism is a trusted tour operator in Qatar, offering
            carefully curated travel experiences that highlight the beauty and
            heritage of our nation.
          </p>
        </div>
      </section>

      {/* About Section 1 */}
      <section className="about-content">
        <div className="about-image">
          <img src={assets.desertsafari_2} alt="Qatar Desert" />
        </div>
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            To become Qatar’s leading tourism brand, inspiring global travelers
            worldwide to explore and connect with our rich culture, vibrant
            history, and warm Arabian hospitality. We envision a future where
            Qatar is recognized not only for its modern skyline and luxury tours
            but also for its timeless traditions, authentic desert adventures,
            and welcoming people. Our vision is to set new benchmarks in tourism
            excellence, creating unforgettable travel experiences that foster
            cultural appreciation, sustainability, and meaningful global
            connections.
          </p>
        </div>
      </section>

      {/* About Section 2 */}
      <section className="about-content reverse">
        <div className="about-image">
          <img src={assets.desertsafari_1} alt="Doha City Tour" />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            To craft tours that are authentic, safe, and memorable, while
            proudly supporting local communities and promoting sustainable
            tourism in Qatar. We are committed to delivering travel experiences
            that showcase Qatar’s rich heritage, cultural diversity, and
            breathtaking natural wonders, including desert safaris, city tours,
            and cultural attractions. Our mission is to provide world-class
            service, create unforgettable holiday memories, and position Qatar
            as a leading destination for global travelers seeking adventure,
            luxury, and authentic Arabian hospitality.
          </p>
        </div>
      </section>

      {/* Attractions / Services */}
      <section className="about-attractions">
        <h2>What We Offer</h2>
        <ul>
          <li>
            <a href="/desert-safari">
              <FaUmbrellaBeach className="service-icon" /> Desert Safari (Half &
              Full Day)
            </a>
          </li>
          <li>
            <a href="/city-tour">
              <FaCity className="service-icon" /> City Tours of Doha
            </a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>
              <FaTheaterMasks className="service-icon" /> Cultural Heritage
              Experiences
            </a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>
              <FaPlaneDeparture className="service-icon" /> Custom Travel
              Itineraries
            </a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>
              <FaHotel className="service-icon" /> Luxury & Budget Packages
            </a>
          </li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={assets.employee_1} alt="Team Member 1" />
            <h3>Sohail Khan</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={assets.employee_2} alt="Team Member 2" />
            <h3>Mustafa kamal</h3>
            <p>Travel Consultant</p>
          </div>
          <div className="team-member">
            <img src={assets.employee_3} alt="Team Member 3" />
            <h3>Mohammed Saeed</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img src={assets.employee_4} alt="Team Member 4" />
            <h3>Sara Yusuf</h3>
            <p>Marketing Specialist</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="about-cta"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="about-cta-overlay"></div>
        <div className="about-cta-content">
          <h2>Plan Your Journey With Us</h2>
          <p>
            Discover unforgettable experiences with our expert team. <br />
            Let us handle the details while you focus on creating memories.
          </p>
        <Link to="/contact" className="btn-large">
  Get in Touch
</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
