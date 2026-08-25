import React from 'react';
import CTAButton from './CTAButton';

export default function OffersCTA() {
  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello AS Solar! I want to book a free consultation and site survey.");
    window.open(`https://wa.me/923144632662?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="offers" className="offers-cta-section section-padding">
      <div className="container">
        
        <div className="offers-cta-card glass-card text-center">
          <span className="section-small-subheading">SPECIAL CLIENT OFFERS</span>
          <h2 className="offers-cta-heading">
            Ready To Take Control Of <span className="highlight-text">Your Energy?</span>
          </h2>
          <p className="offers-cta-desc">
            Eliminate high electricity bills and switch to sustainable solar power with our exclusive complementary client services.
          </p>

          <div className="offers-benefits-row">
            <div className="benefit-pill">
              <span className="benefit-dot"></span>
              <span>FREE CONSULTATION</span>
            </div>
            <div className="benefit-pill">
              <span className="benefit-dot"></span>
              <span>FREE SITE SURVEY</span>
            </div>
            <div className="benefit-pill">
              <span className="benefit-dot"></span>
              <span>ONLINE SETTINGS OPTIONS</span>
            </div>
          </div>

          <div className="offers-cta-actions">
            <CTAButton text="Book Your Free Consultation →" />
            <button onClick={handleWhatsAppClick} className="cta-btn cta-btn-whatsapp-hero">
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
