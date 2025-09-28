import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { assets } from "../../assets/assets";

const Home = () => {
  // Background images for slider
  const images = [
    assets.mainpage_3,
    assets.mainpage_2,
    assets.mainpage_4,
    assets.mainpage_1,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // har 5 sec baad change hoga
    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // smooth scroll karega
      });
    }, 100);
  };

  return (
    <div className="home-page">
      {/* ✅ Hero Section with Slider */}
      <div className="home-slider-hero">
        {images.map((img, index) => (
          <div
            key={index}
            className={`home-slide-bg ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <section className="home-hero">
          <h1 className="home-hero-title">Welcome to GDT</h1>
          <p className="home-hero-text">
            Gulf Dunes Tourism is one of the best tour operators in Qatar. Our
            professional guides ensure you experience Qatar’s true beauty with
            unforgettable tours and luxury service.
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
            <img src={assets.citytour_3} alt="City Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">City Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>4 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/city-tour" className="home-btn" onClick={handleClick}>
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
              <span className="flextime">Flexible</span>
              <Link to="/half-day" className="home-btn" onClick={handleClick}>
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.west_1} alt="West Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">West Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>4 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/west-tour" className="home-btn" onClick={handleClick}>
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.north_1} alt="North Tour" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">North Tour</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>4 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/north-tour" className="home-btn" onClick={handleClick}>
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.fullday_1} alt="Desert Full Day" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Desert Full Day</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>8 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/full-day" className="home-btn" onClick={handleClick}>
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.quadbiking_1} alt="Quad biking" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Quad biking</h3>
              <span className="home-stars">⭐⭐⭐⭐☆</span>
              <p>8 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/Quad-biking" className="home-btn" onClick={handleClick}>
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
              <span className="flextime">Flexible</span>
              <Link
                to="/desert-safari"
                className="home-btn"
                onClick={handleClick}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.duhatour_0} alt="Doha Tourism" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Doha Tourism</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>4 Hours</p>
              <span className="flextime">Flexible</span>
              <Link to="/doha-tourism" className="home-btn" onClick={handleClick}>
                Learn More
              </Link>
            </div>
          </div>

          <div className="home-tour-card">
            <img src={assets.qatarpackage} alt="Qatar Tour Packages" />
            <div className="home-tour-overlay">
              <h3 className="home-tour-title">Qatar Tour Packages</h3>
              <span className="home-stars">⭐⭐⭐⭐⭐</span>
              <p>6-8 Hours</p>
              <span className="flextime">Flexible</span>
              <Link
                to="/qatar-packages"
                className="home-btn"
                onClick={handleClick}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="home-gallery">
        <h2 className="home-section-title">Our Happy Guests</h2>
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

      {/* FAQ Section */}
      <section className="faq container">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>
            What are the key landmarks and attractions included in Gulf Dunes
            Tourism’s Doha city tours?
          </summary>
          <p>
            Gulf Dunes Tourism covers all the must-visit attractions of Doha
            including the Doha Corniche, Souq Waqif, Katara Cultural Village,
            Pearl-Qatar, Lusail City, and the Museum of Islamic Art.
          </p>
        </details>

        <details>
          <summary>
            What is the process for reserving a Doha tour with Gulf Dunes
            Tourism?
          </summary>
          <p>
            Booking with Gulf Dunes Tourism is simple and hassle-free. You can
            reserve your Doha tour online, via WhatsApp, email or through a
            direct phone call.
          </p>
        </details>

        <details>
          <summary>
            Could you share information about the various tour packages offered?
          </summary>
          <p>
            Gulf Dunes Tourism offers a wide range of packages such as half-day
            city tours, full-day tours, desert safari adventures, cultural
            experiences, and private customized trips.
          </p>
        </details>

        <details>
          <summary>
            In what ways do Gulf Dunes Tourism’s Doha tours stand out?
          </summary>
          <p>
            What makes Gulf Dunes Tourism unique is the combination of
            professional tour guides, luxury vehicles, personalized itineraries,
            and authentic Qatari experiences.
          </p>
        </details>

        <details>
          <summary>
            How can I reach Gulf Dunes Tourism?
          </summary>
          <p>
            You can contact Gulf Dunes Tourism by phone, WhatsApp, email, or
            through the official website inquiry form.
          </p>
        </details>
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
        <Link to="/contact" className="home-btn-large" onClick={handleClick}>
          Book Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
