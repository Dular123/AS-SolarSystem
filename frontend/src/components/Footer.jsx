import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top-grid">
          
          {/* Brand Info & Official Logo Only */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="AS Solar System Sialkot" className="footer-logo-img" loading="lazy" decoding="async" width="150" height="45" />
            </div>
            <p className="footer-brand-desc">
              Clean Energy. Reliable Power. Professional Solutions.
            </p>
            <p className="footer-brand-sub">
              Trusted solar energy provider in Sialkot and across Punjab. Custom system design, high-efficiency installations, and lifetime maintenance support.
            </p>
            <span className="footer-ntn">NTN: J198886-4</span>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#area">Service Area</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Breakdown */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Solar Installation</a></li>
              <li><a href="#services">Maintenance</a></li>
              <li><a href="#services">Electrical Services</a></li>
              <li><a href="#services">Power Solutions</a></li>
              <li><a href="#services">Customized Structures</a></li>
              <li><a href="#services">BMS Systems</a></li>
              <li><a href="#services">Mechanical Services</a></li>
            </ul>
          </div>

          {/* Social Icons Only & Address */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Social Media</h4>
            <div className="footer-social-icons-row">
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/as.solargroup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn instagram"
                aria-label="Instagram"
                title="Instagram (@as.solargroup)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok Icon */}
              <a 
                href="https://www.tiktok.com/@as.solars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn tiktok"
                aria-label="TikTok"
                title="TikTok (@as.solars)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.162 0 .32.015.474.043V9.309a6.332 6.332 0 0 0-.474-.018 6.34 6.34 0 1 0 6.34 6.34V9.083a8.212 8.212 0 0 0 5.228 1.859V7.5a4.79 4.79 0 0 1-1.457-.814z"/>
                </svg>
              </a>

              {/* YouTube Icon */}
              <a 
                href="https://www.youtube.com/@A.S-solar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn youtube"
                aria-label="YouTube"
                title="YouTube (@A.S-solar)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="footer-address-box" style={{ marginTop: '1.25rem' }}>
              <p>Business Bay, Kashmir Road, Sialkot (Near Ruby Villas)</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AS SOLAR. All rights reserved. Powering Punjab with Clean Energy.</p>
        </div>
      </div>
    </footer>
  );
}
