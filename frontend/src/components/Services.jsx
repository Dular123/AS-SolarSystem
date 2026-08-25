import React from 'react';
import CTAButton from './CTAButton';

export default function Services() {
  const servicesList = [
    {
      num: '01',
      title: 'Solar Installation',
      desc: 'Professional solar system installation designed for efficient energy production in residential, commercial & industrial settings.',
    },
    {
      num: '02',
      title: 'Solar Maintenance & Panel Care',
      desc: 'Specialized panel cleaning, thermal inspection, and long-term system care to ensure peak efficiency year-round.',
    },
    {
      num: '03',
      title: 'Solar Electrical Services',
      desc: 'Comprehensive electrical wiring, distribution panels, grid synchronization, and protective safety switchgear.',
    },
    {
      num: '04',
      title: 'Customized & Elevated Structures',
      desc: 'Elevated L2/L3 customized mounting structures engineered to withstand heavy winds and optimize roof space.',
    },
    {
      num: '05',
      title: 'Battery Management Systems (BMS)',
      desc: 'BMS communication setup, lithium-ion battery integration, and hybrid inverter configuration for smart power backup.',
    },
    {
      num: '06',
      title: 'Turn-Key Power Solutions',
      desc: 'Reliable uninterrupted power solutions tailored for factories, commercial outlets, and luxury residences.',
    },
    {
      num: '07',
      title: 'Mechanical Services, Earthing & Boring',
      desc: 'Precision mechanical engineering, dedicated copper earthing pits, and deep boring solutions for complete system grounding.',
    },
  ];

  return (
    <section id="services" className="services-section section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-small-subheading">WHAT WE DO</span>
          <h2 className="section-main-heading">
            Complete Energy Solutions <span className="highlight-text">Under One Roof.</span>
          </h2>
          <p className="section-desc">
            From heavy engineering and elevated structures to BMS communication and earthing, AS Solar provides end-to-end solar mastery.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="services-grid-container">
          {servicesList.map((service, idx) => (
            <div 
              key={service.num} 
              className="service-card glass-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-card-top">
                <span className="service-number">{service.num}</span>
                <span className="service-tag-badge">ENGINEERING</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-card-footer">
                <CTAButton text="Book Service" phoneNumber="923144632662" message={`Inquiry about ${service.title}`} className="service-cta-btn" />
                <span className="card-arrow-icon">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
