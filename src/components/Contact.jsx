import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for any questions or support</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">📍</span>
            <h3>Location</h3>
            <p>123 Fitness Street<br />Karachi, Pakistan</p>
          </div>
          {/* <div className="info-card">
            <span className="info-icon">📞</span>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div> */}
      <div className="info-card">
  <span className="info-icon">✉️</span>
  <h3>Email</h3>
  <p>iamalik2005@gmail.com</p>
</div>

<div className="info-card">
  <span className="info-icon">💼</span>
  <h3>LinkedIn</h3>
  <p>
    <a href="https://www.linkedin.com/in/ibrahim-ahmed05/" target="_blank" rel="noopener noreferrer">
      linkedin.com/in/ibrahim-ahmed05
    </a>
  </p>
</div>

<div className="info-card">
  <span className="info-icon">🐙</span>
  <h3>GitHub</h3>
  <p>
    <a href="https://github.com/Ibrahim-ahmed05" target="_blank" rel="noopener noreferrer">
      github.com/Ibrahim-ahmed05
    </a>
  </p>
</div>

          {/* <div className="info-card">
            <span className="info-icon">⏰</span>
            <h3>Hours</h3>
            <p>Mon-Fri: 9AM - 6PM<br />Sat-Sun: 10AM - 4PM</p>
          </div> */}
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Your message"
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              className={`button button-primary ${status === 'loading' ? 'loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="success-message">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
