import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    system: '',
    rating: 5,
    text: ''
  });

  // Fetch top 3-5 recent reviews from API
  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (res.ok && data.success) {
        setReviews(data.data);
      }
    } catch (err) {
      console.error('Error loading reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setReviews(data.data);
        setCurrentIndex(0); // Display the newly added review immediately
        setSuccessMsg('Thank you! Your review has been added.');
        setNewReview({ name: '', location: '', system: '', rating: 5, text: '' });
        setTimeout(() => {
          setShowForm(false);
          setSuccessMsg('');
        }, 2000);
      } else {
        alert(data.message || 'Failed to post review.');
      }
    } catch (err) {
      console.error('Error submitting review:', err);
      alert('Could not submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrev = () => {
    if (reviews.length <= 1) return;
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (reviews.length <= 1) return;
    setCurrentIndex(prev => (prev + 1) % reviews.length);
  };

  const currentRev = reviews[currentIndex] || {
    name: 'AS Solar Client',
    location: 'Sialkot',
    system: 'Solar Installation',
    rating: 5,
    text: 'Great service and high-efficiency solar panels.'
  };

  return (
    <section id="reviews" className="testimonials-section section-padding bg-alt">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">CLIENT REVIEWS</span>
          <h2 className="section-main-heading">
            What Our <span className="highlight-text">Customers Say</span>
          </h2>
          <p className="section-desc">
            Showing top recent client reviews across Sialkot & Punjab.
          </p>
        </div>

        {/* Display Reviews Slider */}
        {!loading && reviews.length > 0 && (
          <div className="testimonial-slider-card glass-card text-center">
            {/* SVG 5-Star Rating */}
            <div className="stars-svg-row">
              {[...Array(currentRev.rating || 5)].map((_, idx) => (
                <svg key={idx} className="star-icon" viewBox="0 0 24 24" fill="var(--color-primary)" width="20" height="20">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>

            <p className="testimonial-quote-text">"{currentRev.text}"</p>

            <div className="testimonial-author-info">
              <h4 className="author-name-title">{currentRev.name}</h4>
              <span className="author-meta">{currentRev.system} — {currentRev.location}</span>
            </div>

            {/* Slider Controls */}
            {reviews.length > 1 && (
              <div className="slider-controls" style={{ marginTop: '2rem' }}>
                <button onClick={handlePrev} className="slider-arrow prev" aria-label="Previous Testimonial">←</button>
                <div className="slider-dots">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      className={`slider-dot ${currentIndex === idx ? 'active' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>
                <button onClick={handleNext} className="slider-arrow next" aria-label="Next Testimonial">→</button>
              </div>
            )}
          </div>
        )}

        {/* Action Button: Add A Review */}
        <div className="text-center" style={{ marginTop: '2.5rem' }}>
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="cta-btn cta-btn-primary"
          >
            {showForm ? 'Close Review Form' : '+ Write A Review'}
          </button>
        </div>

        {/* Add Review Form Box */}
        {showForm && (
          <div className="add-review-card glass-card text-center" style={{ maxWidth: '600px', margin: '2rem auto 0 auto', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Write Your Review</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Share your experience with AS Solar. Your review will be published instantly.
            </p>

            {successMsg ? (
              <div style={{ color: '#10b981', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', textAlign: 'center', fontWeight: '700' }}>
                {successMsg}
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="rev-name">Your Full Name *</label>
                  <input 
                    type="text" 
                    id="rev-name" 
                    name="name" 
                    required 
                    placeholder="e.g. Usman Malik" 
                    value={newReview.name} 
                    onChange={handleInputChange} 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="rev-loc">City / Location</label>
                    <input 
                      type="text" 
                      id="rev-loc" 
                      name="location" 
                      placeholder="e.g. Sialkot" 
                      value={newReview.location} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rev-sys">Solar System Capacity</label>
                    <input 
                      type="text" 
                      id="rev-sys" 
                      name="system" 
                      placeholder="e.g. 10kW On-Grid System" 
                      value={newReview.system} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="rev-rating">Rating (1 to 5 Stars)</label>
                  <select 
                    id="rev-rating" 
                    name="rating" 
                    value={newReview.rating} 
                    onChange={handleInputChange}
                  >
                    <option value="5">5 Stars — Excellent</option>
                    <option value="4">4 Stars — Very Good</option>
                    <option value="3">3 Stars — Good</option>
                    <option value="2">2 Stars — Fair</option>
                    <option value="1">1 Star — Poor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="rev-text">Your Review *</label>
                  <textarea 
                    id="rev-text" 
                    name="text" 
                    rows="3" 
                    required 
                    placeholder="Share feedback on our installation quality, bill savings, or support..." 
                    value={newReview.text} 
                    onChange={handleInputChange} 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="cta-btn cta-btn-primary" 
                  style={{ width: '100%', opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? 'Publishing Review...' : 'Publish Review →'}
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
