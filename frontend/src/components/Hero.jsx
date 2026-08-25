import React from 'react';
import CTAButton from './CTAButton';

export default function Hero() {
  const handleWhatsAppUs = () => {
    const msg = encodeURIComponent("Hello AS Solar! I want to inquire about solar installation for my property.");
    window.open(`https://wa.me/923144632662?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero-container">
      <div className="hero-wrapper container">
        {/* LEFT COLUMN */}
        <div className="hero-left-content">

          {/* 2. Large Headline */}
          <h1 className="hero-main-title animate-seq-2">
            Power Your Future With <span className="highlight-gradient">Clean Energy.</span>
          </h1>

          {/* 3. Animated Text Sentence */}
          <p className="hero-animated-subtitle animate-seq-3">
            <span className="ticker-item">Solar Installation</span>
            <span className="bullet-sep">•</span>
            <span className="ticker-item">Energy Solutions</span>
            <span className="bullet-sep">•</span>
            <span className="ticker-item">Professional Engineering</span>
            <span className="bullet-sep">•</span>
            <span className="ticker-item">Long-Term Support</span>
          </p>

          <div className="hero-region-tag animate-seq-3">
            Based in Sialkot — Serving All Over Punjab
          </div>

          {/* 4. CTA Buttons */}
          <div className="hero-buttons-group animate-seq-4">
            <CTAButton text="Get Free Consultation" />
            <button
              onClick={handleWhatsAppUs}
              className="cta-btn cta-btn-whatsapp-hero"
              aria-label="WhatsApp Us"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.432l.359.213c1.472.873 3.176 1.334 4.91 1.335 5.234 0 9.49-4.255 9.492-9.491.002-2.536-.986-4.92-2.78-6.716-1.794-1.797-4.18-2.787-6.717-2.788-5.234 0-9.49 4.256-9.491 9.492-.001 1.839.529 3.63 1.536 5.187l.233.359-.999 3.649 3.739-.981z" />
              </svg>
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right-content animate-seq-5">
          <div className="floating-image-card">
            <img
              src="/images/hero-solar.png"
              alt="AS Solar Turnkey Installation"
              className="hero-solar-img"
            />
            <div className="img-overlay-badge">
              <span className="badge-number">10+</span>
              <span className="badge-text">Years Industry Experience</span>
            </div>
            <div className="img-overlay-badge-bottom">
              <span className="badge-dot"></span>
              <span>NTN: J198886-4 Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <a href="#marquee" className="scroll-explore-btn">
        <span>Scroll to explore</span>
        <span className="arrow-down">↓</span>
      </a>
    </section>
  );
}
