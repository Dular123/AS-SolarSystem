import React from 'react';

/**
 * Reusable CTA Button component
 * Clicking "Get Free Consultation" opens the Consultation Appointment Booking Popup Modal
 */
export default function CTAButton({ 
  text = "Get Free Consultation →", 
  message = "", 
  variant = "primary", 
  className = "",
  style = {},
  onClick
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
      return;
    }

    // Open Consultation Appointment Booking Popup Modal
    const event = new CustomEvent('open-consultation-modal', {
      detail: { message }
    });
    window.dispatchEvent(event);
  };

  return (
    <button 
      onClick={handleClick} 
      className={`cta-btn cta-btn-${variant} ${className}`}
      style={style}
      aria-label="Get Free Consultation"
    >
      <span>{text}</span>
    </button>
  );
}
