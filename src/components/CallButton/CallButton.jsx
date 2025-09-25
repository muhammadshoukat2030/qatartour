import React from "react";
import { FaPhone } from "react-icons/fa"; 
import "./CallButton.css";

const CallButton = () => {
  // Phone number
  const phoneNumber = "+97450715252"; // apna number dal do
  
  // tel link
  const callLink = `tel:${phoneNumber}`;

  return (
    <a
      href={callLink}
      className="call-button"
    >
      <FaPhone size={30} />
    </a>
  );
};

export default CallButton;
