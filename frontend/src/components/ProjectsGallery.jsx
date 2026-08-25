import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function ProjectsGallery() {
  const projectsData = [
    {
      id: 1,
      title: '15kW Residential Solar System',
      category: 'Residential',
      location: 'Kashmir Road, Sialkot',
      img: '/images/about-solar.png',
      desc: 'High-yield residential installation achieving zero electricity bill with DISCO net metering.'
    },
    {
      id: 2,
      title: '50kW Elevated Commercial Array',
      category: 'Commercial',
      location: 'Small Industrial Estate, Sialkot',
      img: '/images/commercial-solar.png',
      desc: 'Custom heavy-duty elevated structure optimizing commercial rooftop space.'
    },
    {
      id: 3,
      title: '100kW Industrial Power Plant',
      category: 'Industrial',
      location: 'Gujranwala, Punjab',
      img: '/images/industrial-solar.png',
      desc: 'Heavy-duty industrial grid-tied solar system powering textile machinery.'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredProjects.length);
  };

  const currentProj = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section id="projects" className="gallery-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">PORTFOLIO GALLERY</span>
          <h2 className="section-main-heading">
            Our Work <span className="highlight-text">Speaks For Itself.</span>
          </h2>
          <p className="section-desc">
            Explore our solar installations and energy solutions across Sialkot and Punjab.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs">
          {['All', 'Residential', 'Commercial', 'Industrial'].map(cat => (
            <button
              key={cat}
              className={`gallery-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Slider */}
        <div 
          className="gallery-slider-wrapper glass-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="gallery-slide-container">
            <div className="slide-image-box">
              <img 
                src={currentProj.img} 
                alt={currentProj.title} 
                className="gallery-slide-img" 
              />
              <span className="slide-category-badge">{currentProj.category}</span>
            </div>

            <div className="slide-content-box">
              <span className="slide-location">{currentProj.location}</span>
              <h3 className="slide-title">{currentProj.title}</h3>
              <p className="slide-desc">{currentProj.desc}</p>
              
              <div style={{ marginTop: '1.5rem' }}>
                <CTAButton text="Inquire Similar Installation →" message={`Inquiry regarding ${currentProj.title}`} />
              </div>
            </div>
          </div>

          {/* Slider Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <div className="slider-controls">
              <button onClick={handlePrev} className="slider-arrow prev" aria-label="Previous Slide">←</button>
              <div className="slider-dots">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="slider-arrow next" aria-label="Next Slide">→</button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
