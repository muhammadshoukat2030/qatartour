import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { assets } from "../../assets/assets";
import BookNowBtn from "../../components/BookNowBtn/BookNowBtn";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div
        className="home-section-background"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <section className="home-hero">
          <h1 className="home-hero-title">My name is shoukat</h1>
          <p className="home-hero-text">
            Adventure Time Tourism is one of the best tour operators in Qatar.
            Our professional guides ensure you experience Qatar’s true beauty
            with unforgettable tours and luxury service.
          </p>
        </section>
      </div>

      {/* Features */}
      <section className="home-features">
        <div className="home-feature-card">Experienced Guides</div>
        <div className="home-feature-card">Diverse Tour Options</div>
        <div className="home-feature-card">Budget-Friendly</div>
        <div className="home-feature-card">Unseen Sights</div>
        <div className="home-feature-card">Visionary Activities</div>
      </section>

      {/* Available Tours */}
      <section className="home-available-tours">
        <h2 className="home-section-title">Available Tours</h2>
        <div className="home-tour-cards">
          <div className="home-tour-card">
            <img src={assets.west_1} alt="West Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">West Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>3-4 Hours</p>
              <Link to="/west-tour" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.north_1} alt="North Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">North Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>3-4 Hours</p>
              <Link to="/north-tour" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.citytour_1} alt="City Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">City Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>4 Hours</p>
              <Link to="/city-tour" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.halfday_1} alt="Desert Half Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Desert Half Day</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>4 Hours</p>
              <Link to="/half-day" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.fullday_1} alt="Desert Full Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Desert Full Day</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>6-8 Hours</p>
              <Link to="/full-day" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.desertsafari_1} alt="Desert Full Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Desert Safari in Qatar</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>6-8 Hours</p>
              <Link to="/desert-safari" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.duhatour_1} alt="Desert Full Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Doha Tourism</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>6-8 Hours</p>
              <Link to="/doha-tourism" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.citytour_1} alt="Desert Full Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Qatar Tour Packages</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>6-8 Hours</p>
              <Link to="/qatar-packages" className="home-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="home-gallery">
        <h2 className="home-section-title">Gallery</h2>
        <div className="home-slider">
          <div className="home-slide-track">
            <div className="home-slide">
              <img src={assets.review_1} alt="Gallery 1" />
            </div>
            <div className="home-slide">
              <img src={assets.review_2} alt="Gallery 2" />
            </div>
            <div className="home-slide">
              <img src={assets.review_3} alt="Gallery 3" />
            </div>
            <div className="home-slide">
              <img src={assets.review_4} alt="Gallery 4" />
            </div>
            <div className="home-slide">
              <img src={assets.review_5} alt="Gallery 5" />
            </div>
            {/* Duplicate for smooth loop */}
            <div className="home-slide">
              <img src={assets.review_6} alt="Gallery 6" />
            </div>
            <div className="home-slide">
              <img src={assets.review_7} alt="Gallery 7" />
            </div>
            <div className="home-slide">
              <img src={assets.review_8} alt="Gallery 8" />
            </div>
            <div className="home-slide">
              <img src={assets.review_9} alt="Gallery 9" />
            </div>
            <div className="home-slide">
              <img src={assets.review_10} alt="Gallery 10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="home-mission">
        <h2 className="home-section-title">Our Mission & Vision</h2>
        <p>
          Our mission is to deliver world-class tourism experiences to visitors,
          blending luxury, culture, and adventure in every journey across Qatar.
        </p>
        <p>
          We envision creating unforgettable memories by showcasing Qatar’s
          breathtaking landscapes, rich heritage, and modern lifestyle with
          unmatched hospitality.
        </p>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Ready to Discover Qatar?</h2>
        <p>
          Book your journey today and let us make your adventure truly special.
        </p>
        <Link to="/contact" className="home-btn-large">
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
