import React from "react";
import { Link } from "react-router-dom";
import "./FullDay.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

const FullDay = () => {
  return (
    <div className="ds-page">
      {/* Hero Section */}
      <header
        className="ds-hero"
        style={{ backgroundImage: `url(${assets.fullday_1})` }}
      >
        <div className="ds-overlay"></div>
        <div className="ds-hero-content">
          <h1>Full Day Desert Safari</h1>
          <p>
            Spend an unforgettable day in the desert with dune adventures,
            cultural shows, BBQ dinner, and breathtaking sunset views.
          </p>
          <div className="ds-hero-actions">
            {/* <a href="/contact" className="ds-btn ds-btn-primary">Book Now</a>
            <Link to="/contact" className="ds-btn ds-btn-outline">Contact Us</Link> */}
            <ContactAbout/>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="ds-container ds-overview">
        <h2>Overview</h2>
        <p>
          The Full Day Desert Safari offers the ultimate Arabian experience.
          From thrilling adventures to cultural evenings, it combines everything
          — adventure, food, and entertainment in one complete package.
        </p>
      </section>

      {/* Highlights */}
      <section className="ds-container ds-highlights">
  <h2>Itinerary – Full Day Desert Safari</h2>
  <ul>
    <li>🚙 Thrilling <strong>dune bashing</strong> in a 4x4 Land Cruiser.</li>
    <li>🐪 <strong>Camel ride</strong> & sandboarding on golden dunes.</li>
    <li>📸 Scenic stop at the <strong>Inland Sea (Khor Al Adaid)</strong>.</li>
    <li>🏖️ Relax at a <strong>Bedouin camp</strong> by the shoreline.</li>
    <li>🌊 Optional <strong>swim & beach games</strong>.</li>
    <li>🍖 Delicious <strong>BBQ buffet dinner</strong>.</li>
    <li>🎶 Live <strong>Tanoura, belly dance & fire show</strong>.</li>
    <li>✨ <strong>Henna painting</strong> & Shisha experience.</li>
  </ul>
</section>


      {/* Inclusions  Reminders Before */}
    <section className="ds-container"> 
  <h2>Reminders Before You Go</h2>
  <div className="ds-grid">
    <div className="ds-card">
      <h3>⚠️ Health</h3>
      <p>Not recommended for pregnant women or those with heart, neck, or back problems.</p>
    </div>
    <div className="ds-card">
      <h3>🎒 Packing</h3>
      <p>Travel light as you’ll be moving frequently during the safari.</p>
    </div>
    <div className="ds-card">
      <h3>👕 Clothing</h3>
      <p>Wear casual & comfortable clothes. In winter, carry a jacket or wrap.</p>
    </div>
    <div className="ds-card">
      <h3>🏊 Swimming</h3>
      <p>Bring a towel & extra clothes if you plan to swim in the Arabian Gulf.</p>
    </div>
  </div>
</section>

      {/* Inclusions */}
      <section className="ds-container">
        <h2>Inclusions</h2>
        <div className="ds-grid">
          <div className="ds-card">
            <h3>✔ Transport</h3>
            <p>Travel in a modern, air-conditioned 4x4 vehicle.</p>
          </div>
          <div className="ds-card">
          <h3>✔ Pick-up & Drop-off </h3>
            <p> Convenient service from your preferred location within Doha.</p>
          </div>
          <div className="ds-card">
             <h3>✔ Expert Desert Driver</h3>
            <p>
              Professional Desert Driver experienced in off-road dune bashing.
            </p>
          </div>
          <div className="ds-card">
            <h3>✔ Dune Bashing Adventure</h3>
            <p> Approximately 40 minutes of adrenaline-pumping dune driving.</p>
          </div>
          <div className="ds-card">
            <h3>✔  Refreshments</h3>
            <p>   Arabic coffee, tea, and soft drinks.</p>
          </div>
          <div className="ds-card">
            <h3>✔ Camel Ride Experience</h3>
            <p> Optional camel riding available at an additional cost.</p>
          </div>
           <div className="ds-card">
            <h3>✔ Meal </h3>
            <p> Buffet Meal with a variety of local and international dishes.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="ds-container">
        <h2>Gallery</h2>
        <div className="ds-gallery-grid">
          <img src={assets.fullday_1} alt="Full Day 1" />
          <img src={assets.fullday_2} alt="Full Day 2" />
          <img src={assets.fullday_3} alt="Full Day 3" />
          <img src={assets.fullday_4} alt="Full Day 4" />
          <img src={assets.fullday_5} alt="Full Day 5" />
          <img src={assets.fullday_6} alt="Full Day 6" />
          <img src={assets.fullday_7} alt="Full Day 7" />
          <img src={assets.fullday_8} alt="Full Day 8" />
        </div>
      </section>

      {/* CTA */}
      <section className="ds-container ds-cta">
        <h2>Don’t Miss the Full Desert Experience</h2>
        <div className="ds-cta-actions">
          {/* <a href="/contact" className="ds-btn ds-btn-primary">Book Now</a>
          <Link to="/contact" className="ds-btn ds-btn-outline">Contact Us</Link> */}
          <ContactAbout/>
        </div>
      </section>
    </div>
  );
};

export default FullDay;
