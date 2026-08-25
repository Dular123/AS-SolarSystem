import React from 'react';
import CTAButton from './CTAButton';

export default function Projects() {
  const projectList = [
    {
      title: '15kW On-Grid Solar Plant',
      location: 'Kashmir Road, Sialkot',
      type: 'Residential Net Metering',
      benefit: 'Reduced monthly electric bill from PKR 95,000 to zero with export credit.',
      tag: 'COMPLETED'
    },
    {
      title: '50kW Elevated Commercial Array',
      location: 'Small Industrial Estate, Sialkot',
      type: 'Industrial Turn-Key',
      benefit: 'Custom heavy-duty elevated structure preserving rooftop parking space.',
      tag: 'COMPLETED'
    },
    {
      title: '10kW Hybrid Battery System',
      location: 'Ruby Villas Neighborhood, Sialkot',
      type: 'Luxury Villa Power Backup',
      benefit: 'Seamless BMS lithium battery backup during grid load-shedding.',
      tag: 'COMPLETED'
    },
    {
      title: '30kW Commercial Solar Project',
      location: 'Gujranwala, Punjab',
      type: 'Commercial Net Metering',
      benefit: 'High-yield tier-1 panels delivering reliable power to commercial complex.',
      tag: 'COMPLETED'
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">PORTFOLIO EXCELLENCE</span>
          <h2 className="section-main-heading">
            Featured <span className="highlight-text">Solar Installations</span>
          </h2>
          <p className="section-desc">
            Explore recent turnkey solar projects delivered across Sialkot and all over Punjab.
          </p>
        </div>

        <div className="projects-grid">
          {projectList.map((proj, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-card-badge">
                <span className="location-pill">📍 {proj.location}</span>
                <span className="status-pill">{proj.tag}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <span className="project-type">{proj.type}</span>
              <p className="project-benefit">{proj.benefit}</p>
              <div className="project-footer">
                <CTAButton 
                  text="Inquire Similar Project →" 
                  message={`Hello AS Solar! I am interested in a system similar to ${proj.title}.`}
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
