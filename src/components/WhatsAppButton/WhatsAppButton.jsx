import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  // Pre-filled message
  const message = "Hello! I would like to know more about your services.";
  const encodedMessage = encodeURIComponent(message);

  // WhatsApp link
  const whatsappLink = `https://wa.me/0097450715252?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
