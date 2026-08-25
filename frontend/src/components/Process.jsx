import React from 'react';
import CTAButton from './CTAButton';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Free Consultation',
      desc: 'Discuss your energy needs and bill savings with our engineers.'
    },
    {
      num: '02',
      title: 'Site Survey',
      desc: 'On-site technical survey of roof structure & electrical setup.'
    },
    {
      num: '03',
      title: 'System Design',
      desc: 'Custom engineering layout with Tier-1 solar components.'
    },
    {
      num: '04',
      title: 'Installation',
      desc: 'Precision mounting, electrical wiring & green meter setup.'
    },
    {
      num: '05',
      title: 'Maintenance',
      desc: 'Remote online monitoring & routine after-sales support.'
    }
  ];

  return (
    <section id="process" className="process-section section-padding process-bg-section">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">HOW WE WORK</span>
          <h2 className="section-main-heading text-prominent">
            Our 5-Step <span className="highlight-text">Solar Process</span>
          </h2>
          <p className="section-desc text-prominent-sub">
            A seamless journey from initial consultation to long-term clean energy generation.
          </p>
        </div>

        <div className="process-timeline-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-step-card glass-card-prominent">
              <div className="step-badge-circle">
                <span className="step-num-badge">{step.num}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <CTAButton text="Start Free Consultation →" />
        </div>

      </div>
    </section>
  );
}
