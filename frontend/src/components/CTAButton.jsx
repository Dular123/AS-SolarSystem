import React from 'react';

/**
 * Reusable CTA Button component
 * Redirects directly to WhatsApp chat for AS Solar (0314 4632662 / +92 314 4632662)
 */
export default function CTAButton({ 
  text = "Get Free Consultation →", 
  phoneNumber = "923144632662", 
  message = "Hello AS Solar, I would like to get a free solar consultation.", 
  variant = "primary", 
  className = "",
  style = {} 
}) {
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleWhatsAppRedirect} 
      className={`cta-btn cta-btn-${variant} ${className}`}
      style={style}
      aria-label="Contact AS Solar on WhatsApp"
    >
      <span>{text}</span>
    </button>
  );
}
