import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function Hero() {
  const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.png'
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2500); // Smooth background slideshow
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleWhatsAppUs = () => {
    const msg = encodeURIComponent("Hello AS Solar! I want to inquire about a solar system installation.");
    window.open(`https://wa.me/923144632662?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero-container hero-centered-layout">
      {/* Background Photo Crossfade Slideshow */}
      <div className="hero-bg-slideshow">
        {heroImages.map((imgUrl, idx) => (
          <div
            key={imgUrl}
            className={`hero-bg-slide ${idx === currentImgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ))}
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-centered-content container text-center">

        {/* Massive Centered Headline */}
        <h1 className="hero-center-title">
          Empowering Homes & Businesses With <span className="highlight-text">Clean Solar Energy</span>
        </h1>

        {/* Centered Subtitle */}
        <p className="hero-center-desc">
          Custom solar system design, high-efficiency panel installations, elevated structures, and lifetime maintenance support across Sialkot & Punjab.
        </p>

        {/* Dual CTAs */}
        <div className="hero-cta-group">
          <CTAButton text="Get Free Consultation →" />
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

        {/* Modern Frosted Trust Pills Bar */}
        <div className="hero-trust-bar">
          <div className="trust-pill-item">
            <span className="pill-accent-num">10+</span>
            <span className="pill-label">Years Experience</span>
          </div>
          <div className="trust-pill-divider"></div>
          <div className="trust-pill-item">
            <span className="pill-accent-num">NTN</span>
            <span className="pill-label">J198886-4 Verified</span>
          </div>
          <div className="trust-pill-divider"></div>
          <div className="trust-pill-item">
            <span className="pill-accent-num">HQ</span>
            <span className="pill-label">Sialkot, Punjab</span>
          </div>
        </div>

      </div>

      {/* Scroll Explore Arrow */}
      <a href="#marquee" className="scroll-explore-btn">
        <span>Explore Solutions</span>
        <span className="arrow-down">↓</span>
      </a>
    </section>
  );
}
