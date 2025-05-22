import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Plans() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Plans', icon: '🎯' },
    { id: 'beginner', name: 'Beginner', icon: '🌱' },
    { id: 'intermediate', name: 'Intermediate', icon: '⚡' },
    { id: 'advanced', name: 'Advanced', icon: '🔥' }
  ];

  const plans = [
    {
      id: 1,
      title: 'Full Body Strength',
      category: 'beginner',
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Perfect for those starting their fitness journey. Build strength and endurance with basic exercises.',
      features: ['Full body workouts', 'Basic form guidance', 'Progressive overload', 'Nutrition tips'],
      icon: '💪',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 2,
      title: 'Muscle Building',
      category: 'intermediate',
      duration: '12 weeks',
      level: 'Intermediate',
      description: 'Take your gains to the next level with this comprehensive muscle-building program.',
      features: ['Split training', 'Advanced techniques', 'Recovery protocols', 'Supplement guide'],
      icon: '🏋️',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 3,
      title: 'Elite Performance',
      category: 'advanced',
      duration: '16 weeks',
      level: 'Advanced',
      description: 'For experienced athletes looking to push their limits and achieve peak performance.',
      features: ['Periodization', 'Advanced programming', 'Competition prep', 'Performance analytics'],
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  const filteredPlans = activeCategory === 'all'
    ? plans
    : plans.filter(plan => plan.category === activeCategory);

  return (
    <div className="plans-container">
      <div className="plans-header">
        <h1>Workout Plans</h1>
        <p>Choose the perfect plan to achieve your fitness goals</p>
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="plans-grid">
        {filteredPlans.map(plan => (
          <div key={plan.id} className="plan-card">
            <div className="plan-image">
              <img src={plan.image} alt={plan.title} />
            </div>
            <div className="plan-header">
              <span className="plan-icon">{plan.icon}</span>
              <div className="plan-level">{plan.level}</div>
            </div>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-duration">
              <span className="duration-icon">⏱️</span>
              {plan.duration}
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <NavLink to={`/plans/${plan.category}/${plan.id}`} className="button button-primary">
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
