import React from 'react';

export default function Marquee() {
  const marqueeItems = [
    "SOLAR INSTALLATION",
    "POWER SOLUTIONS",
    "ENGINEERING SERVICES",
    "MAINTENANCE & PANEL CARE",
    "CLEAN ENERGY",
    "CUSTOMIZED STRUCTURES",
    "SIALKOT & ALL OVER PUNJAB",
    "NET METERING",
  ];

  return (
    <div id="marquee" className="marquee-banner">
      <div className="marquee-track">
        <div className="marquee-content">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-bullet">•</span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-bullet">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
