import React from "react";
import { FaPhone } from "react-icons/fa";
import "./CallButton.css";

const CallButton = () => {
  const phoneNumber = "+97450715252";
  const callLink = `tel:${phoneNumber}`;

  return (
    <a href={callLink} className="call-button">
      <FaPhone />
    </a>
  );
};

export default CallButton;
