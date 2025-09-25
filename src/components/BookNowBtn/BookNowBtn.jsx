import React from 'react';
import { Link } from 'react-router-dom';
import "./BookNowBtn.css";

function BookNowBtn() {
  const handleClick = () => {
    window.scrollTo(0, 0); // page top pe scroll karega
  };

  return (
    <Link to="/contact" className="book-btn" onClick={handleClick}>
      Book Now
    </Link>
  );
}

export default BookNowBtn;
