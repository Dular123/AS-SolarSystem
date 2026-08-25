import React from 'react';

export default function Reviews() {
  const reviewsData = [
    {
      name: 'M. Ali Raza',
      location: 'Sialkot',
      system: '12kW Hybrid Solar System',
      text: 'AS Solar team installed a 12kW system at my residence near Kashmir Road. Their engineering precision, green meter processing, and after-sale support are top notch. My electricity bill is down by over 85%!',
      rating: 5
    },
    {
      name: 'Sheikh Usman',
      location: 'Sialkot Business Bay',
      system: '25kW Commercial Net Metering',
      text: 'Extremely professional team led by skilled engineers. They completed the elevated structure work and DISCO net metering on schedule. Highly recommended for commercial solar projects in Punjab.',
      rating: 5
    },
    {
      name: 'Chaudhry Hamza',
      location: 'Gujranwala, Punjab',
      system: '10kW On-Grid System',
      text: 'Best pricing and genuine Tier-1 components. The online inverter settings support and remote app setup were handled very smoothly by their team.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="reviews-section section-padding bg-alt">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">CLIENT FEEDBACK</span>
          <h2 className="section-main-heading">
            What Our <span className="highlight-text">Clients Say</span>
          </h2>
          <p className="section-desc">
            Trusted by homeowners and business leaders across Sialkot and Punjab.
          </p>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((rev, idx) => (
            <div key={idx} className="review-card glass-card">
              <div className="stars-row">
                {'⭐'.repeat(rev.rating)}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <div className="review-author-box">
                <div className="author-avatar">{rev.name.charAt(0)}</div>
                <div className="author-details">
                  <h4 className="author-name">{rev.name}</h4>
                  <span className="author-sub">{rev.system} • {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
