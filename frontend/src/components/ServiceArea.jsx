import React from 'react';
import CTAButton from './CTAButton';

export default function ServiceArea() {
  const cities = [
    'Sialkot (HQ)',
    'Lahore',
    'Gujranwala',
    'Faisalabad',
    'Multan',
    'Rawalpindi',
    'Sargodha',
    'Bahawalpur & Punjab'
  ];

  return (
    <section id="area" className="area-section section-padding bg-alt">
      <div className="container">
        
        <div className="area-wrapper glass-card">
          {/* CONTENT COLUMN */}
          <div className="area-content-col">
            <span className="section-small-subheading">GEOGRAPHIC REACH</span>
            <h2 className="section-main-heading">
              Serving Homes & Businesses <span className="highlight-text">Across Punjab</span>
            </h2>
            <p className="area-description">
              Based in Sialkot, AS Solar provides turnkey solar installation, structural engineering, net metering, and maintenance services across all major cities and districts of Punjab.
            </p>

            <div className="cities-grid">
              {cities.map((city, idx) => (
                <div key={idx} className="city-pill">
                  <span className="city-dot"></span>
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <div className="area-cta-wrapper">
              <CTAButton text="Check Solar Feasibility →" className="area-cta-btn" />
            </div>
          </div>

          {/* SVG CONNECTION GRAPHIC */}
          <div className="area-graphic-col">
            <div className="map-graphic-box">
              <div className="map-svg-container">
                <svg className="map-svg" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet">
                  {/* Background Grid Lines */}
                  <path d="M0 40h400M0 90h400M0 140h400M0 190h400M0 240h400" stroke="var(--border-glass)" strokeDasharray="4 4" />
                  <path d="M40 0v280M100 0v280M160 0v280M220 0v280M280 0v280M340 0v280" stroke="var(--border-glass)" strokeDasharray="4 4" />
                  
                  {/* Animated Connection Arc from Sialkot to Punjab Nodes */}
                  <path d="M120 90 Q 200 30 280 110" stroke="var(--color-primary)" strokeWidth="3" strokeDasharray="6 6" className="path-animated" />
                  <path d="M120 90 Q 220 170 320 190" stroke="var(--color-primary)" strokeWidth="2.5" strokeDasharray="6 6" className="path-animated" />
                  <path d="M120 90 Q 180 210 200 230" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="6 6" className="path-animated" />

                  {/* Sialkot HQ Node */}
                  <circle cx="120" cy="90" r="14" fill="var(--color-primary)" opacity="0.25" className="node-pulse" />
                  <circle cx="120" cy="90" r="7" fill="var(--color-primary)" />
                  <text x="120" y="65" fill="var(--text-main)" fontSize="13" fontWeight="800" textAnchor="middle">SIALKOT (HQ)</text>

                  {/* Punjab Network Nodes */}
                  <circle cx="280" cy="110" r="6" fill="var(--text-main)" />
                  <text x="292" y="114" fill="var(--text-muted)" fontSize="11" fontWeight="600">Lahore</text>

                  <circle cx="320" cy="190" r="6" fill="var(--text-main)" />
                  <text x="330" y="194" fill="var(--text-muted)" fontSize="11" fontWeight="600">Faisalabad</text>

                  <circle cx="200" cy="230" r="6" fill="var(--text-main)" />
                  <text x="212" y="234" fill="var(--text-muted)" fontSize="11" fontWeight="600">Multan</text>
                </svg>
              </div>
              <div className="map-badge">Coverage: Sialkot → All Over Punjab</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
