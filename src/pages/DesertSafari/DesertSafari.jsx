import React from "react";
import { Link } from "react-router-dom";
import "./DesertSafari.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

const DesertSafari = () => {
  return (
    <div className="dsf-page">
      {/* Hero Section */}
      <header
        className="dsf-hero"
        style={{ backgroundImage: `url(${assets.desertsafari_1})` }}
      >
        <div className="dsf-overlay"></div>
        <div className="dsf-hero-content">
          <h1>Desert Safari in Qatar</h1>
          <p>
            Experience the thrill of Qatar’s desert with dune bashing, camel
            rides, and a magical sunset over the golden sands.
          </p>
          <div className="dsf-hero-actions">
            {/* <a href="/contact" className="dsf-btn dsf-btn-primary">
              Book Now
            </a>
            <Link to="/contact" className="dsf-btn dsf-btn-outline">
              Contact Us
            </Link> */}
             <ContactAbout/>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="dsf-overview dsf-container">
        <h2>Overview</h2>
        <p>
          Join us on a breathtaking desert safari where adventure and cultural
          experiences meet. Enjoy dune bashing in a 4x4, ride a camel across the
          sands, and witness the serene beauty of the desert sunset. End your
          journey with traditional Qatari hospitality, including Arabic coffee,
          dates, and delicious BBQ dinner under the stars.
        </p>
      </section>

      {/* Highlights */}
      <section className="dsf-highlights dsf-container">
        <h2>Tour Highlights</h2>
        <ul>
          <li>Dune Bashing in the Qatari desert</li>
          <li>Camel Riding Experience</li>
          <li>Sandboarding Adventure</li>
          <li>Visit Inland Sea (Khor Al Adaid)</li>
          <li>BBQ Dinner and Cultural Entertainment</li>
          <li>Sunset Photography Stop</li>
        </ul>
      </section>

      {/* Inclusions */}
      <section className="dsf-inclusions dsf-container">
        <h2>Inclusions</h2>
        <div className="dsf-grid">
          <div className="dsf-card">
            <h3>✔ Transportation</h3>
            <p>Pick up & drop off in air-conditioned 4x4 vehicles</p>
          </div>
          <div className="dsf-card">
            <h3>✔ Tour Guide</h3>
            <p>Professional and experienced desert guide</p>
          </div>
          <div className="dsf-card">
            <h3>✔ Refreshments</h3>
            <p>Water, Arabic coffee, dates & traditional tea</p>
          </div>
          <div className="dsf-card">
            <h3>✔ Meals</h3>
            <p>Delicious BBQ dinner with cultural performances</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="dsf-gallery dsf-container">
        <h2>Desert Safari Moments</h2>
        <div className="dsf-gallery-grid">
          <img src={assets.desertsafari_1} alt="Desert 1" />
          <img src={assets.desertsafari_2} alt="Desert 2" />
          <img src={assets.desertsafari_3} alt="Desert 3" />
          <img src={assets.desertsafari_4} alt="Desert 4" />
          <img src={assets.desertsafari_5} alt="Desert 5" />
          <img src={assets.desertsafari_6} alt="Desert 6" />
          <img src={assets.desertsafari_7} alt="Desert 5" />
          <img src={assets.desertsafari_8} alt="Desert 6" />
        </div>
      </section>

      {/* CTA */}
      <section className="dsf-cta dsf-container">
        <h2>Ready for Your Desert Adventure?</h2>
        <div className="dsf-cta-actions">
         <ContactAbout/>
        </div>
      </section>
    </div>
  );
};

export default DesertSafari;
