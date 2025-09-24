import React from "react";
import { Link } from "react-router-dom";
import "./HalfDay.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

const HalfDay = () => {
  return (
    <div className="hd-page">
      {/* Hero Section */}
      <header
        className="hd-hero"
        style={{ backgroundImage: `url(${assets.halfday_1})` }}
      >
        <div className="hd-overlay"></div>
        <div className="hd-hero-content">
          <h1>Half Day Desert Safari</h1>
          <p>
            Enjoy a thrilling half-day desert safari with dune bashing, camel
            rides, and cultural experiences — perfect for travelers short on
            time.
          </p>
          <div className="hd-hero-actions">
            {/* <a href="/contact" className="hd-btn hd-btn-primary">Book Now</a>
            <Link to="/contact" className="hd-btn hd-btn-outline">Contact Us</Link> */}
            <ContactAbout />
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="hd-container hd-overview">
        <h2>Overview</h2>
        <p>
          This Half Day Safari is designed for those who want to experience the
          desert in a short time. From dune bashing to sandboarding and camel
          rides, the trip packs adventure and culture into a few hours.
        </p>
      </section>

      {/* Highlights */}
     <section className="hd-container hd-highlights">
  <h2>🗺️ Itinerary – Half Day Desert Safari</h2>
  <ul>
    <li>🚙 <strong>Exciting dune bashing</strong> in 4x4 luxury vehicles</li>
    <li>📍 <strong>Pickup service</strong> from your location to start the adventure</li>
    <li>🌊 Visit the stunning <strong>Inland Sea (Khor Al Adaid)</strong></li>
    <li>☕ Enjoy <strong>traditional Arabic refreshments</strong> at the camp</li>
    <li>📸 Multiple <strong>photo stops</strong> at scenic desert viewpoints</li>
  </ul>
</section>


      {/* Inclusions */}
     <section className="hd-container">
  <h2>🌟 Important Reminder Before Your Desert Safari</h2>
  <div className="hd-grid">
    <div className="hd-card">
      <h3>⚠️ Health & Safety</h3>
      <p>
        Desert safari rides are not suitable for <strong>pregnant women</strong>, or for
        guests with <strong>heart, back, or neck problems</strong>.
      </p>
    </div>
    <div className="hd-card">
      <h3>🎒 Travel Light</h3>
      <p>
        Bring only the <strong>essentials</strong>, as you’ll be moving around frequently
        during the tour.
      </p>
    </div>
    <div className="hd-card">
      <h3>👕 Dress Comfortably</h3>
      <p>
        Wear <strong>casual, lightweight clothing</strong> suitable for desert conditions.
      </p>
    </div>
    <div className="hd-card">
      <h3>🧥 Winter Essentials</h3>
      <p>
        Carry a <strong>jacket or shawl</strong> if you are traveling during the cooler months.
      </p>
    </div>
  </div>
</section>

      {/* Inclusions */}
      <section className="hd-container">
        <h2>Inclusions</h2>
        <div className="hd-grid">
          <div className="hd-card">
            <h3>✔ Transport</h3>
            <p>Travel in a modern, air-conditioned 4x4 vehicle.</p>
          </div>
          <div className="hd-card">
            <h3>✔ Pick-up & Drop-off </h3>
            <p> Convenient service from your preferred location within Doha.</p>
          </div>
          <div className="hd-card">
            <h3>✔ Expert Desert Driver</h3>
            <p>
              Enjoy a safe and thrilling ride with a professional safari guide.
            </p>
          </div>
          <div className="hd-card">
            <h3>✔ Dune Bashing Adventure</h3>
            <p> Approximately 40 minutes of adrenaline-pumping dune driving.</p>
          </div>
          <div className="hd-card">
            <h3>✔  Refreshments</h3>
            <p>  Complimentary water, soft drinks, tea, or coffee during the tour.</p>
          </div>
          <div className="hd-card">
            <h3>✔ Camel Ride Experience</h3>
            <p> Optional camel riding available at an additional cost.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="hd-container">
        <h2>Gallery</h2>
        <div className="hd-gallery-grid">
          <img src={assets.halfday_1} alt="Half Day 1" />
          <img src={assets.halfday_4} alt="Half Day 2" />
          <img src={assets.halfday_5} alt="Half Day 3" />
          <img src={assets.halfday_3} alt="Half Day 4" />
        </div>
      </section>

      {/* CTA */}
      <section className="hd-container hd-cta">
        <h2>Book Your Half Day Safari Today</h2>
        <div className="hd-cta-actions">
          {/* <a href="/contact" className="hd-btn hd-btn-primary">Book Now</a>
          <Link to="/contact" className="hd-btn hd-btn-outline">Contact Us</Link> */}
          <ContactAbout />
        </div>
      </section>
    </div>
  );
};

export default HalfDay;
