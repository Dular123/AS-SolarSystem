import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid-wrapper">
          
          {/* LEFT: Layered Image Design */}
          <div className="about-left-image-col">
            <div className="layered-image-container">
              <img 
                src="/images/about-solar.png" 
                alt="AS Solar System Turnkey Solar Panel Installation in Sialkot Punjab" 
                className="about-main-img" 
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
              />
              <div className="floating-badge-years">
                <span className="badge-big-num">10+</span>
                <span className="badge-lbl">Years Experience</span>
              </div>
              <div className="floating-badge-est">
                <span>Est. 2020 • Sialkot</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Copy */}
          <div className="about-right-content-col">
            <span className="section-small-subheading">WHO WE ARE</span>
            <h2 className="section-main-heading">
              Reliable Solar Solutions Built For A <span className="highlight-text">Better Tomorrow.</span>
            </h2>

            <p className="about-description">
              AS Solar is a trusted solar energy provider dedicated to empowering homes and businesses with clean, dependable power. From custom system design and high-efficiency installations to specialized panel care and long-term maintenance, we deliver turn-key solutions built to maximize energy yields and eliminate high utility bills.
            </p>

            {/* Stats Counter Grid */}
            <div className="about-stats-grid">
              <div className="stat-card glass-card">
                <span className="stat-number">2020</span>
                <span className="stat-label">Established</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">Punjab</span>
                <span className="stat-label">Service Area</span>
              </div>
              <div className="stat-card glass-card">
                <span className="stat-number">J198886-4</span>
                <span className="stat-label">NTN Registered</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
