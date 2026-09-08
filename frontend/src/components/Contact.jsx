import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Solar Installation',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://as-solarsystem-backend.onrender.com/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Failed to submit inquiry to server.');
      }
    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      // Fallback: Open WhatsApp with form content if server issue occurs
      const msgText = encodeURIComponent(
        `Inquiry for AS Solar:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/923144632662?text=${msgText}`, '_blank', 'noopener,noreferrer');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        
        <div className="section-header text-center">
          <span className="section-small-subheading">GET IN TOUCH</span>
          <h2 className="section-main-heading">
            Let's Build Your <span className="highlight-text">Solar Future.</span>
          </h2>
          <p className="section-desc">
            Reach out directly to our engineering team or send an inquiry to as.solargroup@gmail.com below.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* LEFT: Contact Details & Social Icons Only */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-card-title">Contact Information</h3>
            
            <div className="contact-detail-item">
              <span className="detail-label-icon font-heading">LOC</span>
              <div>
                <strong>Office Address</strong>
                <p>Business Bay, Kashmir Road, Sialkot (Near Ruby Villas), Punjab, Pakistan</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="detail-label-icon font-heading">TEL</span>
              <div>
                <strong>Phone Numbers</strong>
                <p>
                  Primary: <a href="tel:03144632662">0314 4632662</a><br />
                  Secondary: <a href="tel:03117847876">0311 7847876</a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="detail-label-icon font-heading">WA</span>
              <div>
                <strong>WhatsApp Direct</strong>
                <p>
                  <a 
                    href="https://wa.me/923144632662?text=Hello%20AS%20Solar%2C%20I%20want%20to%20inquire%20about%20a%20solar%20system." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link-text"
                  >
                    0314 4632662 (Click to Chat)
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="detail-label-icon font-heading">EML</span>
              <div>
                <strong>Email Address</strong>
                <p><a href="mailto:as.solargroup@gmail.com">as.solargroup@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="detail-label-icon font-heading">NTN</span>
              <div>
                <strong>NTN Registration</strong>
                <p>NTN: J198886-4 • FBR Verified</p>
              </div>
            </div>

            {/* Social Media Logos/Icons Only */}
            <div className="social-links-container">
              <span className="social-title">Follow Us:</span>
              <div className="social-buttons icon-only-socials">
                {/* Instagram Logo */}
                <a 
                  href="https://www.instagram.com/as.solargroup/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn instagram"
                  aria-label="Instagram"
                  title="Instagram (@as.solargroup)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                {/* TikTok Logo */}
                <a 
                  href="https://www.tiktok.com/@as.solars" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn tiktok"
                  aria-label="TikTok"
                  title="TikTok (@as.solars)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.162 0 .32.015.474.043V9.309a6.332 6.332 0 0 0-.474-.018 6.34 6.34 0 1 0 6.34 6.34V9.083a8.212 8.212 0 0 0 5.228 1.859V7.5a4.79 4.79 0 0 1-1.457-.814z"/>
                  </svg>
                </a>

                {/* YouTube Logo */}
                <a 
                  href="https://www.youtube.com/@A.S-solar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn youtube"
                  aria-label="YouTube"
                  title="YouTube (@A.S-solar)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="contact-form-card glass-card">
            <h3 className="form-card-title">Send An Inquiry</h3>
            <p className="form-card-sub">Your inquiry will be sent directly to <strong>as.solargroup@gmail.com</strong>.</p>

            {submitted ? (
              <div className="form-success-box">
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#10b981' }}>Inquiry Sent Successfully!</h4>
                <p style={{ marginBottom: '1.25rem' }}>
                  Thank you <strong>{formData.name}</strong>! Your solar inquiry has been transmitted to <strong>as.solargroup@gmail.com</strong>. Our engineering team will review your requirements and respond shortly.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: 'Solar Installation', message: '' }); }}
                    className="cta-btn cta-btn-primary"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Send Another Inquiry
                  </button>
                  <a 
                    href={`https://wa.me/923144632662?text=${encodeURIComponent(`Hello AS Solar, I submitted an inquiry online for ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn-whatsapp-hero"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Chat On WhatsApp Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {errorMsg && (
                  <div style={{ color: '#ef4444', fontSize: '0.9rem', padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px' }}>
                    {errorMsg}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="e.g. Ali Raza"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="e.g. 0314 4632662"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Solar Installation">Solar Installation</option>
                    <option value="Solar Maintenance">Solar Maintenance</option>
                    <option value="Solar Electrical Services">Solar Electrical Services</option>
                    <option value="Customized Structures">Customized Structures</option>
                    <option value="Battery Management Systems">Battery Management Systems (BMS)</option>
                    <option value="Power Solutions">Power Solutions</option>
                    <option value="Mechanical / Earthing & Boring">Mechanical / Earthing & Boring</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    placeholder="Tell us about your property location, estimated monthly electricity bill, or system size requirement..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="cta-btn cta-btn-primary" 
                  style={{ width: '100%', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Transmitting Inquiry...' : 'Send An Inquiry →'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
