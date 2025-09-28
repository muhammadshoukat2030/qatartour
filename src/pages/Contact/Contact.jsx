import React, { useState } from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xldpgvjo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setShowPopup(true);
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="contact-page">
     {/* Hero Section */}
<header
  className="contact-hero"
  style={{
    backgroundImage: `url(${assets.home})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
  }}
>
  <div className="overlay"></div>
  <div className="hero-content-1">
    <h1>Contact Us</h1>
    <p>Get in touch for bookings and inquiries</p>
  </div>
</header>





      {/* Contact Info */}
      <section className="contact-info">
        <div className="info-card">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>+97450715252</p>
        </div>
        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>gulfdunestourism@gmail.com</p>
        </div>
        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>Doha, Qatar</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Book or Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          {/* City Selection */}
          <div className="form-group">
            <select name="city" required>
              <option value="">Select City</option>
              <option value="doha">Doha</option>
              <option value="alwakrah">Al Wakrah</option>
              <option value="alkhor">Al Khor</option>
              <option value="umm-salal">Umm Salal</option>
            </select>
          </div>

          {/* Tour Type Selection */}
          <div className="form-group">
            <select name="tour_type" required>
              <option value="">Select Tour Type</option>
              <option value="desert-safari">Desert Safari</option>
              <option value="city-tour">City Tour</option>
              <option value="half-day">Half Day Tour</option>
              <option value="full-day">Full Day Tour</option>
              <option value="doha-tour">Doha Tourism</option>
              <option value="qatar-packages">Qatar Tour Packages</option>
              <option value="north-tour">North Tour</option>
              <option value="west-tour">West Tour</option>
            </select>
          </div>

          {/* Date + Time + Guests */}
          <div className="form-row">
            <div className="form-group">
              <input type="text" name="My location" placeholder="My location" required />
            </div>
            <div className="form-group">
              <input type="date" name="date"  required />
            </div>
            <div className="form-group">
              <input type="time" name="time" required />
            </div>
            <div className="form-group">
              <input type="number" name="guests" min="1" placeholder="Guests" required />
            </div>
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>✅ Thank You!</h2>
            <p>Your message has been successfully sent.</p>
            <button className="btn-ok" onClick={closePopup}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* Google Map */}
      <section className="contact-map">
        <h2>Our Location</h2>
        <iframe
          title="Qatar Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.092094048374!2d51.53104037536346!3d25.286652677667037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5379c61f3fb%3A0x8b5d5090c7cf7d87!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1694608537625!5m2!1sen!2sqa"
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
