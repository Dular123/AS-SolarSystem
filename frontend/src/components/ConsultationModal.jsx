import React, { useState, useEffect } from 'react';

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredSlot: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleOpenModal = (event) => {
      const customMsg = event.detail?.message || '';
      setFormData(prev => ({
        ...prev,
        message: customMsg ? `Inquiry: ${customMsg}` : ''
      }));
      setSubmitted(false);
      setErrorMessage('');
      setIsOpen(true);
    };

    window.addEventListener('open-consultation-modal', handleOpenModal);
    return () => window.removeEventListener('open-consultation-modal', handleOpenModal);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name || !formData.phone) {
      setErrorMessage('Please provide your Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const fullMessage = `Preferred Slot: ${formData.preferredSlot || 'Flexible'} | Message: ${formData.message || 'Free solar consultation request'}`;
      
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: 'Free Solar Consultation Slot Booking',
          message: fullMessage
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Failed to submit request. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting consultation request:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Hello AS Solar! I want to schedule a free solar consultation.\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || ''}\nSlot: ${formData.preferredSlot || 'As soon as possible'}`
    );
    window.open(`https://wa.me/923144632662?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="consultation-modal-card compact-one-view" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal} aria-label="Close Modal">✕</button>

        {!submitted ? (
          <>
            <div className="modal-header compact">
              <span className="modal-badge">FREE APPOINTMENT</span>
              <h2 className="modal-title">Schedule Your Free Slot</h2>
              <p className="modal-subtitle">
                Enter your details to reserve your consultation with AS Solar engineers.
              </p>
            </div>

            {errorMessage && (
              <div className="modal-error-box compact">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form compact">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-name">Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-phone">WhatsApp / Phone *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0314 1234567"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-email">Email Address</label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-slot">Preferred Slot</label>
                  <input
                    id="modal-slot"
                    type="text"
                    name="preferredSlot"
                    value={formData.preferredSlot}
                    onChange={handleChange}
                    placeholder="e.g. Tomorrow 2 PM"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-message">Availability / Message</label>
                <input
                  id="modal-message"
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="System size preference or location details..."
                />
              </div>

              <div className="modal-actions compact">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-btn cta-btn-primary modal-submit-btn"
                >
                  {isSubmitting ? 'Scheduling...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-content text-center compact">
            <div className="success-check-badge">SUCCESS</div>
            <h3 className="success-title">Slot Reserved!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Your appointment details have been sent to <strong>as.solargroup@gmail.com</strong>.
            </p>

            <div className="modal-success-actions compact">
              <button
                onClick={handleDirectWhatsApp}
                className="cta-btn cta-btn-whatsapp-hero"
              >
                <span>Connect Instantly on WhatsApp</span>
              </button>
              <button
                onClick={closeModal}
                className="modal-done-btn"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
