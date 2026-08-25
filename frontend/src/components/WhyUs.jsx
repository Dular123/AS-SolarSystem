import React, { useState } from 'react';
import CTAButton from './CTAButton';

export default function WhyUs() {
  const [activeItem, setActiveItem] = useState(0);

  const points = [
    {
      num: '01',
      title: 'Professional Engineering Team',
      desc: 'Our certified engineers ensure precise electrical calculation, load optimization, and heavy-duty structural safety for every installation.',
    },
    {
      num: '02',
      title: 'Reasonable Prices',
      desc: 'We offer competitive, transparent pricing on tier-1 solar panels, inverters, and mounting structures with maximum financial return on investment.',
    },
    {
      num: '03',
      title: 'Best After-Sale Services',
      desc: 'Our relationship with clients doesn’t end at installation. We provide continuous system monitoring, maintenance, and prompt technical support.',
    },
    {
      num: '04',
      title: 'Time-Oriented Work',
      desc: 'Fast site surveys, rapid engineering designs, and swift execution ensuring your solar plant is powered up on schedule.',
    }
  ];

  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">THE AS SOLAR ADVANTAGE</span>
          <h2 className="section-main-heading">
            Why Choose <span className="highlight-text">AS Solar?</span>
          </h2>
          <p className="section-desc">
            We combine engineering precision with top-tier components and unbeatable customer support.
          </p>
        </div>

        <div className="why-us-layout">
          {/* LEFT: Points List */}
          <div className="why-us-list">
            {points.map((pt, idx) => (
              <div 
                key={pt.num}
                className={`why-us-item glass-card ${activeItem === idx ? 'active' : ''}`}
                onClick={() => setActiveItem(idx)}
              >
                <div className="why-item-header">
                  <span className="why-num">{pt.num}</span>
                  <h3 className="why-item-title">{pt.title}</h3>
                </div>
                <p className="why-item-desc">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT: Featured Focus Graphic & CTA */}
          <div className="why-us-featured-box glass-card">
            <div className="featured-content">
              <span className="featured-badge">AS SOLAR COMMITMENT</span>
              <div className="featured-icon-circle">
                {points[activeItem].num}
              </div>
              <h3 className="featured-title">{points[activeItem].title}</h3>
              <p className="featured-text">{points[activeItem].desc}</p>

              <div className="featured-bullets">
                <div className="bullet-point">— Tier-1 Equipment Warranties</div>
                <div className="bullet-point">— Net Metering Processing</div>
                <div className="bullet-point">— Experienced Sialkot & Punjab Team</div>
              </div>

              <div className="featured-cta">
                <CTAButton text="Claim Free Site Survey →" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
