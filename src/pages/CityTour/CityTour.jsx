import React from "react";
import { Link } from "react-router-dom";
import "./CityTour.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

const CityTour = () => {
  return (
    <div className="ct-page">
      {/* Hero Section */}
      <header
        className="ct-hero"
        style={{ backgroundImage: `url(${assets.citytour_3})` }}
      >
        <div className="ct-overlay"></div>
        <div className="ct-hero-content">
          <h1>Qatar City Tour</h1>
          <p className="ct-lead">
            Discover Doha’s culture, skyline, and iconic attractions in this
            tour.
          </p>

          <div className="ct-hero-actions">
            <ContactAbout />
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="ct-overview ct-container">
        <h2>Overview</h2>
        <p>
          Experience Doha like never before. From the modern architectural
          marvels of West Bay to the cultural charm of Souq Waqif, this tour
          offers a perfect mix of tradition and modernity. Enjoy breathtaking
          views along the Corniche, explore Katara Cultural Village, and capture
          unforgettable memories across the capital.
        </p>
      </section>

      {/* Highlights */}
      <section className="ct-highlights ct-container">
        <h2>Tour Highlights</h2>
        <ul>
          <li>
            Walk along West Bay and Doha Corniche Drive with stunning skyline
            views
          </li>
          <li>Explore the lively Souq Waqif traditional market</li>
          <li>Visit the Museum of Islamic Art</li>
          <li>Drive through The Pearl-Qatar island</li>
          <li>Photo stop at Katara Cultural Village</li>
          <li>Dhow Harbour Blend of modern and traditional Doha</li>
        </ul>
      </section>

      {/* Inclusions */}
      <section className="ct-inclusions ct-container">
        <h2>Inclusions</h2>
        <div className="ct-grid">
          <div className="ct-card">
            <h3>✔ Transportation</h3>
            <p>Pick up & drop off in air-conditioned vehicles</p>
          </div>
          <div className="ct-card">
            <h3>✔ Tour Guide</h3>
            <p>Experienced and knowledgeable guide</p>
          </div>
          <div className="ct-card">
            <h3>✔ Refreshments</h3>
            <p>Water, Arabic coffee & light snacks</p>
          </div>
          <div className="ct-card">
            <h3>✔ Flexible Timings</h3>
            <p>Morning, afternoon & evening slots available</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="ct-gallery ct-container">
        <h2>City Tour Moments</h2>
        <div className="ct-gallery-grid">
          <img src={assets.citytour_1} alt="City 1" />
          <img src={assets.citytour_2} alt="City 2" />
          <img src={assets.citytour_3} alt="City 3" />
          <img src={assets.citytour_4} alt="City 4" />
          <img src={assets.citytour_5} alt="City 5" />
          <img src={assets.citytour_6} alt="City 6" />
          <img src={assets.measeum} alt="City 7" />
          <img src={assets.flagplaza} alt="City 8" />
        </div>
      </section>

      {/* CTA */}
      <section className="ct-cta ct-container">
        <h2>Ready to Explore Doha?</h2>
        <ContactAbout />
      </section>
    </div>
  );
};

export default CityTour;
