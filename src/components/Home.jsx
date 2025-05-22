import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const handleGetStarted = () => {
    setShowMessage(true);
  };

  const features = [
    {
      id: 1,
      icon: '💪',
      title: 'Workout Plans',
      description: 'Customized workout routines for all fitness levels',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      icon: '🥗',
      title: 'Nutrition Guide',
      description: 'Expert nutrition advice and meal planning',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '500+', label: 'Workout Plans' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Transform Your Body, <span className="gradient-text">Transform Your Life</span>
            </h1>
            <p className="hero-subtitle">
              Start your fitness journey today with personalized workout plans, nutrition guidance, and expert support.
            </p>
            <div className="hero-actions">
              <button onClick={handleGetStarted} className="button button-primary">
                Get Started
              </button>
              <NavLink to="/plans" className="button button-secondary">
                View Plans
              </NavLink>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Fitness" />
          <div className="floating-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Comprehensive fitness solutions for your journey</p>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <div
              key={feature.id}
              className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="feature-content">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {showMessage && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome to Your Fitness Journey!</h2>
            <p>
              We're excited to help you achieve your fitness goals. Let's start by creating your personalized plan.
            </p>
            <div className="modal-actions">
              <NavLink to="/plans" className="button button-primary">
                Explore Plans
              </NavLink>
              <button onClick={() => setShowMessage(false)} className="button button-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
