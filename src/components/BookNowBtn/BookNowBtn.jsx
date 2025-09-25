import React from 'react';
import { Link } from 'react-router-dom';
import "./BookNowBtn.css";

function BookNowBtn() {
 const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // smooth scroll karega
      });
    }, 200); // 1s delay
  };

  return (
    <Link to="/contact" className="book-btn" onClick={handleClick}>
      Book Now
    </Link>
  );
}

export default BookNowBtn;
