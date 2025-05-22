import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Guide() {
  const [activeSection, setActiveSection] = useState('nutrition');

  const sections = [
    {
      id: 'nutrition',
      title: 'Nutrition Guide',
      icon: '🥗',
      description: 'Learn about proper nutrition and meal planning for optimal results',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      topics: [
        {
          title: 'Macronutrients',
          description: 'Understanding proteins, carbs, and fats',
          icon: '🍎',
          image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          title: 'Meal Planning',
          description: 'How to create effective meal plans',
          icon: '📋',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
        },
        {
          title: 'Supplements',
          description: 'Essential supplements for fitness',
          icon: '💊',
          image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
      ]
    },
    {
      id: 'workouts',
      title: 'Workout Guide',
      icon: '💪',
      description: 'Master proper form and technique for maximum results',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      topics: [
        {
          title: 'Exercise Form',
          description: 'Proper technique for common exercises',
          icon: '🎯',
          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          title: 'Workout Types',
          description: 'Different training methods explained',
          icon: '🏋️',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          title: 'Recovery',
          description: 'Importance of rest and recovery',
          icon: '🛌',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
      ]
    },
    {
      id: 'equipment',
      title: 'Equipment Guide',
      icon: '🏋️',
      description: 'Learn about different fitness equipment and how to use them',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      topics: [
        {
          title: 'Free Weights',
          description: 'Dumbbells, barbells, and kettlebells',
          icon: '🏋️',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          title: 'Machines',
          description: 'Gym equipment and their uses',
          icon: '⚙️',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          title: 'Accessories',
          description: 'Essential fitness accessories',
          icon: '🎯',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        }
      ]
    }
  ];

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="guide-container">
      <div className="guide-header">
        <h1>Fitness Guide</h1>
        <p>Your comprehensive resource for fitness knowledge</p>
      </div>

      <div className="guide-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`guide-nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            <span className="nav-title">{section.title}</span>
          </button>
        ))}
      </div>

      <div className="guide-content">
        <div className="section-header">
          <div className="section-image">
            <img src={currentSection.image} alt={currentSection.title} />
          </div>
          <span className="section-icon">{currentSection.icon}</span>
          <h2>{currentSection.title}</h2>
          <p>{currentSection.description}</p>
        </div>

        <div className="topics-grid">
          {currentSection.topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-image">
                <img src={topic.image} alt={topic.title} />
              </div>
              <div className="topic-icon">{topic.icon}</div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <NavLink to={`/guide/${currentSection.id}/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} className="button button-secondary">
                Learn More
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
