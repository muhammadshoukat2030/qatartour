import React from "react";
import { Link } from "react-router-dom";
import "./QuadBiking.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

// React Icons
import { FaCar, FaCheckCircle, FaUserShield } from "react-icons/fa";
import { GiHealthNormal, GiClothes, GiSandsOfTime, GiSodaCan } from "react-icons/gi";
import { MdCardTravel, MdOutlinePregnantWoman } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const QuadBiking = () => {
  return (
    <div className="quadbiking-page">
      {/* Hero Section */}
      <header
        className="quadbiking-hero"
        style={{ backgroundImage: `url(${assets.quadbiking_1})` }}
      >
        <div className="quadbiking-overlay"></div>
        <div className="quadbiking-hero-content">
          <h1>Welcome to Quad Biking</h1>
          <p>
            Spend an unforgettable day in the desert with dune adventures,
            cultural shows, BBQ dinner, and breathtaking sunset views.
          </p>
          <div className="quadbiking-hero-actions">
            <ContactAbout />
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="quadbiking-container quadbiking-overview">
        <h2>Overview</h2>
        <p>
          Discover the adventure of a lifetime with Gulf Dunes Tourism’s <strong>Quad
          Biking Desert Safari in Qatar</strong>. Ride powerful quad bikes across golden
          sand dunes, capture breathtaking desert views, and enjoy the thrill of
          off-road exploration. Our tours are designed to give you the perfect
          mix of excitement, safety, and comfort while showcasing the hidden
          beauty of Qatar’s desert landscape.
        </p>
      </section>

      {/* Highlights */}
      <section className="quadbiking-container quadbiking-highlights">
        <h2>Itinerary – Quad Biking</h2>
        <ul>
          <li>🚐 <strong>Pickup Service:</strong> Begin your tour with pickup from your hotel or chosen location in Doha.</li>
          <li>🚙 <strong>Drive to the Desert:</strong> Travel in an air-conditioned vehicle to the quad biking location.</li>
          <li>🦺 <strong>Safety Briefing:</strong> Professional guides provide safety instructions and gear assistance.</li>
          <li>🏍️ <strong>Quad Biking Ride:</strong> Take control of your quad bike and explore the vast desert terrain.</li>
          <li>🏜️ <strong>Desert Exploration:</strong> Ride up and down the dunes, capture photos, and enjoy the natural beauty.</li>
          <li>🥤 <strong>Refreshment Break:</strong> Stay refreshed with water, tea, and soft drinks.</li>
          <li>🏨 <strong>Return Transfer:</strong> Relax as we drive you back to your hotel or drop-off point in Doha.</li>
        </ul>
      </section>

      {/* Reminders */}
      <section className="quadbiking-container">
        <h2>Reminders Before You Go</h2>
        <div className="quadbiking-grid">
          <div className="quadbiking-card">
            <h3><GiHealthNormal /> Health</h3>
            <p>Guests must be 16 years or older to ride quad bikes.</p>
          </div>
          <div className="quadbiking-card">
            <h3><MdCardTravel /> Packing</h3>
            <p>Safety gear (helmet, gloves, goggles) must be worn throughout the ride.</p>
          </div>
          <div className="quadbiking-card">
            <h3><GiClothes /> Clothing</h3>
            <p>Wear comfortable sportswear and closed shoes for the activity.</p>
          </div>
          <div className="quadbiking-card">
            <h3><IoSunny /> Sun Protection</h3>
            <p>Bring sunscreen, sunglasses, and a hat for protection against the sun.</p>
          </div>
          <div className="quadbiking-card">
            <h3><MdOutlinePregnantWoman /> Restrictions</h3>
            <p>The activity is not suitable for pregnant women, children under 16, or guests with serious health conditions.</p>
          </div>
          <div className="quadbiking-card">
            <h3><GiSandsOfTime /> Booking</h3>
            <p>Advance booking is advised to secure your preferred slot.</p>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="quadbiking-container">
        <h2>Inclusions</h2>
        <div className="quadbiking-grid">
          <div className="quadbiking-card">
            <h3><FaCar /> Transport</h3>
            <p>Pickup & drop-off from your hotel in Doha.</p>
          </div>
          <div className="quadbiking-card">
            <h3><FaUserShield /> Expert Guide</h3>
            <p>Professional English-speaking guide for safety & assistance.</p>
          </div>
          <div className="quadbiking-card">
            <h3><FaCheckCircle /> Quad Bike & Gear</h3>
            <p>Quad bike with fuel, helmet, gloves, and goggles.</p>
          </div>
          <div className="quadbiking-card">
            <h3><GiSodaCan /> Refreshments</h3>
            <p>Bottled water, tea, and soft drinks included.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="quadbiking-container">
        <h2>Gallery</h2>
        <div className="quadbiking-gallery-grid">
          <img src={assets.quadbiking_5} alt="QuadBiking 1" />
          <img src={assets.quadbiking_3} alt="QuadBiking 2" />
          <img src={assets.quadbiking_4} alt="QuadBiking 3" />
          <img src={assets.quadbiking_2} alt="QuadBiking 4" />
        </div>
      </section>

      {/* CTA */}
      <section className="quadbiking-container quadbiking-cta">
        <h2>Don’t Miss the Quad Biking Adventure</h2>
        <div className="quadbiking-cta-actions">
          <ContactAbout />
        </div>
      </section>
    </div>
  );
};

export default QuadBiking;
