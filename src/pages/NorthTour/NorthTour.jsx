import React from "react";
import { Link } from "react-router-dom";
import "./NorthTour.css";
import { assets } from "../../assets/assets";
import ContactAbout from "../../components/ButtonImages/ContactAbout";
import BookNowBtn from "../../components/BookNowBtn/BookNowBtn";

const NorthTour = () => {
  return (
    <div className="north-tour-page">
      {/* HERO */}
     <header className="north-hero">
  <img src={assets.north_1} alt="North Qatar Tour" className="north-hero-img" />
  <div className="north-hero-overlay" />
  <div className="north-hero-content">
    <h1>North Qatar Tour — Heritage & Coastline</h1>
    <p className="north-lead">
      Discover the rich history and natural beauty of northern Qatar...
    </p>
    <div className="north-hero-actions">
      <ContactAbout />
    </div>
  </div>
</header>


      {/* Key Info */}
      <section className="north-tour-info container">
        <div className="north-info-grid">
          <div className="north-info-card">
            <h3>Duration</h3>
            <p>4 hours (half or full-day options available).</p>
          </div>
          <div className="north-info-card">
            <h3>Pickup</h3>
            <p>Pickup from hotels or residences across Doha.</p>
          </div>
          <div className="north-info-card">
            <h3>Group Size</h3>
            <p>2 – 10 people (private options available).</p>
          </div>
          <div className="north-info-card">
            <h3>Price</h3>
            <p>Starting From QAR 540 , depending on package.</p>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="north-itinerary container">
        <h2>Itinerary</h2>
        <div className="north-itinerary-grid">
          <article className="north-it-step">
            <div className="north-step-num">1</div>
            <div className="north-step-content">
              <h3>Pickup & Travel North</h3>
              <p>
                Depart from Doha and drive along scenic northern routes, with
                guides providing insights about Qatar’s history and culture.
              </p>
            </div>
          </article>

          <article className="north-it-step">
            <div className="north-step-num">2</div>
            <div className="north-step-content">
              <h3>Al Zubarah Fort</h3>
              <p>
                Explore the UNESCO-listed Al Zubarah Fort and nearby
                archaeological areas.
              </p>
            </div>
          </article>

          <article className="north-it-step">
            <div className="north-step-num">3</div>
            <div className="north-step-content">
              <h3>Traditional Qatari Village</h3>
              <p>
                Experience the charm of a heritage village and gain insight into
                the cultural roots and lifestyle of old Qatar.
              </p>
            </div>
          </article>

          <article className="north-it-step">
            <div className="north-step-num">4</div>
            <div className="north-step-content">
              <h3>Al Khor Harbor</h3>
              <p>
                Explore the historic harbor, once the heart of Qatar’s pearl
                diving and fishing industry, and see the traditional dhow repair
                yards.
              </p>
            </div>
          </article>

          <article className="north-it-step">
            <div className="north-step-num">5</div>
            <div className="north-step-content">
              <h3>Al Thakira Mangroves & Purple Island </h3>
              <p>
                Discover one of Qatar’s oldest and largest mangrove forests, a
                natural sanctuary full of wildlife and scenic landscapes.
              </p>
            </div>
          </article>

          <article className="north-it-step">
            <div className="north-step-num">6</div>
            <div className="north-step-content">
              <h3>Return to Doha</h3>
              <p>
                Relax on the way back, with optional photo stops and
                refreshments along the coast.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Includes */}
      <section className="north-includes container">
        <div className="north-includes-left">
          <h2>What's included</h2>
          <ul>
            <li>Air-conditioned transport</li>
            <li>Guided tour by professional guide</li>
            <li>Heritage site entry fees</li>
            <li>Bottled water and light snacks</li>
            <li>Insurance & 24/7 support</li>
          </ul>
        </div>

        <div className="north-includes-right">
          <h2> Important Guidelines for Your Tour</h2>
          <ul>
            <li>
              Please do not throw waste outside the vehicle. Use the provided
              dustbins or keep your trash with you until the trip ends.
            </li>
            <li>
              Smoking is strictly not allowed inside the vehicle or in public
              spaces during the tour.
            </li>
            <li>
              For safety reasons, taking photographs of military sites or
              government buildings is not permitted.
            </li>
            <li>Private tours available on request</li>
          </ul>
        </div>
      </section>

      {/* Excludes */}
      <section className="north-excludes container">
        <h2>What's Excluded</h2>
        <ul>
          <li>Meals / Snacks (unless specified)</li>
          
        </ul>
      </section>

      {/* Related Tours */}
      <section className="north-related container">
        <h2>Other Tours You May Like</h2>
        <div className="north-related-grid">
          <article className="north-related-card">
            <img src={assets.west_1} alt="West Desert Highlights" />
            <div className="north-related-body">
              <h3>West Desert Highlights</h3>
              <p>
                Adventure and desert landscapes in western Qatar. Perfect for
                photographers and thrill-seekers.
              </p>
              <div className="north-related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>

          <article className="north-related-card">
            <img src={assets.citytour_1} alt="City Highlights" />
            <div className="north-related-body">
              <h3>City Highlights</h3>
              <p>
                Explore Doha’s cultural, historical landmarks and modern
                attractions on this guided city tour.
              </p>
              <div className="north-related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>

          <article className="north-related-card">
            <img src={assets.fullday_1} alt="Desert Full Day" />
            <div className="north-related-body">
              <h3>Desert Full Day Tour</h3>
              <p>
                Experience the desert at its best with dune driving, campfires,
                and BBQ under the stars.
              </p>
              <div className="north-related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>

          <article className="north-related-card">
            <img src={assets.north_1} alt="Northern Coast" />
            <div className="north-related-body">
              <h3>Northern Coast Adventure</h3>
              <p>
                Discover the serene northern coast, heritage villages, and
                scenic beaches of Qatar.
              </p>
              <div className="north-related-actions">
                <BookNowBtn />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <footer className="north-tour-cta">
        <div className="container north-cta-inner">
          <div>
            <h3>Ready to explore the north?</h3>
            <p>
              Book your North Qatar Tour today for an unforgettable journey.
            </p>
          </div>
          <div className="north-hero-actions">
            <ContactAbout />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NorthTour;
