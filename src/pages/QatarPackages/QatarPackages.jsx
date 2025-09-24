import React from "react";
import { Link } from "react-router-dom";
import "./QatarPackages.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";

const QatarPackages = () => {
  return (
    <div className="qtrpkg-page">
      {/* Hero Section */}
      <header
        className="qtrpkg-hero"
        style={{ backgroundImage: `url(${assets.qatarpackage})` }}
      >
        <div className="qtrpkg-overlay"></div>
        <div className="qtrpkg-hero-content">
          <h1>Qatar Tour Packages</h1>
          <p>
            Choose from a wide range of packages tailored just for you. Explore
            Qatar’s culture, adventure, and beauty in style.
          </p>
          <div className="qtrpkg-hero-actions">
            {/* <a href="/contact" className="qtrpkg-btn qtrpkg-btn-primary">
              Book Now
            </a>
            <Link to="/contact" className="qtrpkg-btn qtrpkg-btn-outline">
              Contact Us
            </Link> */}
            <ContactAbout/>
          </div>
        </div>
      </header>

      {/* Packages Grid */}
      <section className="qtrpkg-container">
        <h2>Our Packages</h2>
        <div className="qtrpkg-grid">
          <div className="qtrpkg-card">
            <img src={assets.desertsafari_1} alt="Desert Safari" />
            <h3>Desert Safari</h3>
            <p>
              Thrilling dune bashing, camel rides, and BBQ dinner under the
              stars and enjoy more with us.
            </p>
            <Link to="/desert-safari" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>

          <div className="qtrpkg-card">
            <img src={assets.citytour_1} alt="City Tour" />
            <h3>City Tour</h3>
            <p>
              Discover Doha’s modern skyline, Souq Waqif, and cultural gems in a
              luxury city tour.
            </p>
            <Link to="/city-tour" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>

          <div className="qtrpkg-card">
            <img src={assets.halfday_1} alt="Half Day Tour" />
            <h3>Half Day Tour</h3>
            <p>
              Perfect for those short on time. Explore the city’s highlights in
              just a few hours and enjoy your trip.
            </p>
            <Link to="/half-day" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>

          <div className="qtrpkg-card">
            <img src={assets.fullday_1} alt="Full Day Tour" />
            <h3>Full Day Tour</h3>
            <p>
              A complete experience of Qatar including desert, city, and cultural
              highlights.
            </p>
            <Link to="/full-day" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>

          <div className="qtrpkg-card">
            <img src={assets.west_1} alt="West Tour" />
            <h3>West Tour</h3>
            <p>
              Discover the stark beauty of Doha's West. Explore desert art, limestone formations, and cinematic landscapes.
            </p>
            <Link to="/full-day" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>

          <div className="qtrpkg-card">
            <img src={assets.north_1} alt="Nort Tour" />
            <h3>North Tour</h3>
            <p>
              Explore Qatar's northern coast, heritage villages, and scenic beaches for a serene getaway.
            </p>
            <Link to="/full-day" className="qtrpkg-btn qtrpkg-btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="qtrpkg-cta container">
        <h2>Ready to Book Your Qatar Adventure?</h2>
        <div className="qtrpkg-cta-actions">
          {/* <Link to="/contact" className="qtrpkg-btn qtrpkg-btn-primary">
            Book Now
          </Link>
          <Link to="/contact" className="qtrpkg-btn qtrpkg-btn-outline">
            Contact Us
          </Link> */}
          <ContactAbout/>
        </div>
      </section>
    </div>
  );
};

export default QatarPackages;
