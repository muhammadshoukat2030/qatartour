import React from "react";
import { Link } from "react-router-dom";
import "./DohaTourism.css";
import ContactAbout from "../../components/ButtonImages/ContactAbout";
import { assets } from "../../assets/assets";

const DohaTourism = () => {
  return (
    <div className="doha-tourism-page">
      {/* Hero Section */}
      <header className="doha-tourism-hero">
        <div className="doha-tourism-overlay"></div>
        <div className="doha-tourism-hero-content">
          <h1>Doha Tourism</h1>
          <p>Discover the modern and traditional charm of Doha</p>
          <div className="doha-tourism-hero-actions">
            <ContactAbout />
          </div>
        </div>
      </header>

      {/* Highlights Section */}
      <section className="doha-tourism-section">
        <h2 className="doha-tourism-section-title">Top Highlights</h2>
        <div className="doha-tourism-grid">
          {/* Card 1 */}
          <div className="doha-tourism-card">
            <img src={assets.islamicaet} alt="Museum of Islamic Art" />
            <div className="doha-tourism-card-content">
              <h3>Museum of Islamic Art</h3>
              <p>
                Explore one of the world's greatest collections of Islamic art
                in a stunning architectural masterpiece.
              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="doha-tourism-card">
            <img src={assets.citytour_2} alt="Souq Waqif" />
            <div className="doha-tourism-card-content">
              <h3>Souq Waqif</h3>
              <p>
                Wander through the vibrant alleys of Doha's traditional market,
                filled with spices, textiles, and culture.
              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="doha-tourism-card">
            <img src={assets.citytour_4} alt="Doha Corniche" />
            <div className="doha-tourism-card-content">
              <h3>Doha Corniche</h3>
              <p>
                Stroll along the 7-km waterfront promenade with stunning views
                of the Doha skyline.
              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="doha-tourism-card">
            <img src={assets.kataravillage} alt="Katara Cultural Village" />
            <div className="doha-tourism-card-content">
              <h3>Katara Cultural Village</h3>
              <p>
                Experience Qatar’s cultural hub with theaters, galleries, and
                restaurants by the sea.
              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>

          <div className="doha-tourism-card">
            <img src={assets.pearlisland} alt="Katara Cultural Village" />
            <div className="doha-tourism-card-content">
              <h3>Pearl Qatar Island</h3>
              <p>
                The Pearl-Qatar is exquisite man made island near Doha Known for its luxurious marinas, and unique waterfront
              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>

          <div className="doha-tourism-card">
            <img src={assets.lusailqatar} alt="Katara Cultural Village" />
            <div className="doha-tourism-card-content">
              <h3>Lusail Qatar</h3>
              <p>
                Lusail City is a futuristic city in Qatar known for its Hub of Luxury and sustainable living.              </p>
              <Link to="/contact" className="doha-tourism-btn doha-tourism-btn-mini">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="doha-tourism-cta">
        <h2>Ready to Explore Doha?</h2>
        <p>
          Book your unforgettable journey and discover Doha’s blend of
          tradition and modernity.
        </p>
        <div className="doha-tourism-cta-actions">
          <ContactAbout />
        </div>
      </section>
    </div>
  );
};

export default DohaTourism;
