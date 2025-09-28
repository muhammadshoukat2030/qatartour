import React from "react";
import { Link } from "react-router-dom";
import "./WestTour.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";
import BookNowBtn from "../../components/BookNowBtn/BookNowBtn";

const WestTour = () => {
  return (
    <div className="west-tour-page">
      {/* HERO */}
      <header
        className="west-hero"
        style={{ backgroundImage: `url(${assets.west_1})` }}
      >
        <div className="west-hero-overlay" />
        <div className="west-hero-content">
          <h1>West Desert Tour — Dunes & Heritage</h1>
          <p className="lead">
            Discover Qatar’s golden dunes, desert camps, and unique rock
            formations. A perfect blend of adventure and culture, this tour lets
            you enjoy breathtaking landscapes while exploring Qatar’s rich
            traditions.
          </p>
          <div className="hero-actions">
            <ContactAbout />
          </div>
        </div>
      </header>

      {/* Key Info */}
      <section className="tour-info container">
        <div className="info-grid">
          <div className="info-card">
            <h3>Duration</h3>
            <p>
              4 hours (Half / Full day options). The longer package includes
              extra stops, relaxation breaks and a deeper desert experience.
            </p>
          </div>
          <div className="info-card">
            <h3>Pickup</h3>
            <p>
              Hotel / Residence pickup across Doha, ensuring comfort and
              convenience right from your doorstep.
            </p>
          </div>
          <div className="info-card">
            <h3>Group Size</h3>
            <p>
              2 – 12 people (private options available). Small groups ensure
              personal attention and a friendly atmosphere.
            </p>
          </div>
          <div className="info-card">
            <h3>Price</h3>
            <p>
              Starting From QAR 540 (depends on package). Value-packed options
              for every type of traveler.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="itinerary container">
        <h2>Itinerary</h2>
        <div className="itinerary-grid">
          <article className="it-step">
            <div className="step-num">
              <p>1</p>
            </div>
            <div className="step-content">
              <h3>Pickup & Transit</h3>
              <p>
                We pick you up from Doha, drive towards the western desert while
                sharing insights about local culture and landmarks.
              </p>
            </div>
          </article>

          <article className="it-step">
            <div className="step-num">
              <p>2</p>
            </div>
            <div className="step-content">
              <h3>Mushroom Rock Formation</h3>
              <p>
                Marvel at the naturally shaped Mushroom Rock, one of Qatar’s
                most unique geological wonders.
              </p>
            </div>
          </article>

          <article className="it-step">
            <div className="step-num">
              <p>3</p>
            </div>
            <div className="step-content">
              <h3>Zekreet Village Drive Through</h3>
              <p>
                Pass through the historic Zekreet Village, a small coastal
                settlement that reflects the traditional life of the region.
              </p>
            </div>
          </article>

          <article className="it-step">
            <div className="step-num">
              <p>4</p>
            </div>
            <div className="step-content">
              <h3>Richard Serra’s Sculpture</h3>
              <p>
                Experience the world-renowned Richard Serra Sculpture, a
                monumental artwork set in the Brouq Nature Reserve.
              </p>
            </div>
          </article>

          <article className="it-step">
            <div className="step-num">
              <p>5</p>
            </div>
            <div className="step-content">
              <h3>Return to Doha</h3>
              <p>
                Relax on return trip with comfortable drop-off at your hotel or
                residence.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Includes */}
      <section className="includes container">
        <div className="includes-left">
          <h2>What's included</h2>
          <ul>
            <li>Air-conditioned vehicle & experienced driver</li>
            <li>Bottled water, light snacks for refreshment</li>
            <li>Desert entry permits and fuel</li>
            <li>Photo stops + optional camel ride</li>
            <li>Insurance & 24/7 support throughout the trip</li>
          </ul>
        </div>
        <div className="includes-right">
          <h2>Important Guidelines</h2>
          <ul>
            <li>
              Please do not throw waste outside the vehicle. Use provided
              dustbins.
            </li>
            <li>
              Smoking is strictly not allowed inside the vehicle or in public
              spaces during the tour.
            </li>
            <li>
              For safety reasons, taking photographs of military sites is not
              permitted.
            </li>
            <li>Private tours can be customized on request.</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="gallery-slider container">
          <h2 className="container">Gallery</h2>
          <section className="gallery">
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img src={assets.west_1} alt="Gallery 1" />
                  <p>Experience Doha’s vibrant city life before the desert.</p>
                </div>
                <div className="slide">
                  <img src={assets.pearlisland} alt="Gallery 2" />
                  <p>Golden dunes shining under the Arabian sun.</p>
                </div>
                <div className="slide">
                  <img src={assets.west_2} alt="Gallery 3" />
                  <p>West Desert’s unique rock formations and open skies.</p>
                </div>
                <div className="slide">
                  <img src={assets.west_3} alt="Gallery 4" />
                  <p>Campfire and BBQ experience under starry nights.</p>
                </div>
                <div className="slide">
                  <img src={assets.west_4} alt="Gallery 5" />
                  <p>Scenic heritage sites of northern Qatar.</p>
                </div>
                <div className="slide">
                  <img src={assets.west_5} alt="Gallery 6" />
                  <p>Modern skyline meets ancient traditions.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Related */}
      <section className="related container">
        <h2>Other Tours You May Like</h2>
        <div className="related-grid">
          <article className="related-card">
            <img src={assets.west_1} alt="West Highlights" />
            <div className="related-body">
              <h3>West Highlights</h3>
              <p>A shorter journey highlighting the desert’s best spots.</p>
              <div className="related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>

          <article className="related-card">
            <img src={assets.north_1} alt="North Highlights" />
            <div className="related-body">
              <h3>North Highlights</h3>
              <p>Explore forts, heritage villages and natural beauty.</p>
              <div className="related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>

          <article className="related-card">
            <img src={assets.citytour_3} alt="City Highlights" />
            <div className="related-body">
              <h3>City Highlights</h3>
              <p>Discover Doha’s iconic skyline, souqs and museums.</p>
              <div className="related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq container">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>What should I bring?</summary>
          <p>Sunscreen, sunglasses, hat, comfortable shoes, camera.</p>
        </details>
        <details>
          <summary>Is pickup included?</summary>
          <p>
            Yes — pickup is included from Doha hotels and residences within city
            limits.
          </p>
        </details>
        <details>
          <summary>Can we customize the tour?</summary>
          <p>
            Yes — contact us with your requirements and we’ll prepare a custom
            itinerary.
          </p>
        </details>
      </section>

      {/* CTA */}
      <footer className="tour-cta">
        <div className="container cta-inner">
          <div>
            <h3>Ready for the dunes?</h3>
            <p>
              Reserve your West Desert Tour today — limited spots, world-class
              desert views, and memories for a lifetime.
            </p>
          </div>
          <div className="hero-actions">
            <ContactAbout />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WestTour;
