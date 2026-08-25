import React from 'react';
import CTAButton from './CTAButton';

export default function Offers() {
  const offerItems = [
    {
      title: 'Free Consultation',
      desc: 'Discuss your energy requirements with our solar engineers to get custom system sizing and payback calculations.',
      badge: '100% FREE',
      icon: '💬',
      ctaMsg: 'Hello AS Solar! I would like to get a Free Solar Consultation.'
    },
    {
      title: 'Free Site Surveys',
      desc: 'Our technical team visits your property in Sialkot & across Punjab to assess roof shade, structure & electrical load.',
      badge: 'NO OBLIGATION',
      icon: '📋',
      ctaMsg: 'Hello AS Solar! I want to request a Free Site Survey at my address.'
    },
    {
      title: 'Online Settings Options',
      desc: 'Remote inverter parameter configuration, mobile app setup, and Wi-Fi monitoring troubleshooting for your solar plant.',
      badge: 'REMOTE SUPPORT',
      icon: '🌐',
      ctaMsg: 'Hello AS Solar! I need help with Online Inverter Settings & Remote Monitoring.'
    }
  ];

  return (
    <section id="offers" className="offers-section section-padding bg-alt">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">EXCLUSIVE CLIENT ADVANTAGES</span>
          <h2 className="section-main-heading">
            Special <span className="highlight-text">AS Solar Offers</span>
          </h2>
          <p className="section-desc">
            Take advantage of our complementary services to begin your renewable energy transition today.
          </p>
        </div>

        <div className="offers-grid">
          {offerItems.map((offer, idx) => (
            <div key={idx} className="offer-card glass-card">
              <div className="offer-header">
                <span className="offer-badge">{offer.badge}</span>
                <span className="offer-icon">{offer.icon}</span>
              </div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-desc">{offer.desc}</p>
              <div className="offer-footer">
                <CTAButton 
                  text={`Claim ${offer.title} →`} 
                  message={offer.ctaMsg}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
