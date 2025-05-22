import React, { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownHover = (index) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const navItems = [
    {
      path: '/',
      icon: '🏠',
      text: 'Home'
    },
    {
      path: '/bmi',
      icon: '⚖️',
      text: 'BMI Calculator'
    },
    {
      path: '/plans',
      icon: '📋',
      text: 'Plans',
      dropdown: [
        { path: '/plans/beginner', text: 'Beginner Plans', icon: '🌱' },
        { path: '/plans/intermediate', text: 'Intermediate Plans', icon: '💪' },
        { path: '/plans/advanced', text: 'Advanced Plans', icon: '🔥' }
      ]
    },
    {
      path: '/guide',
      icon: '📚',
      text: 'Guide',
      dropdown: [
        { path: '/guide/nutrition', text: 'Nutrition Guide', icon: '🥗' },
        { path: '/guide/workouts', text: 'Workout Guide', icon: '🏋️' },
        { path: '/guide/equipment', text: 'Equipment Guide', icon: '🎯' }
      ]
    },
    {
      path: '/contact',
      icon: '📞',
      text: 'Contact'
    }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <div className="brand-logo">
            <span className="brand-icon">💪</span>
            <span className="brand-text">FitTrack</span>
          </div>
        </NavLink>

        <button
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (!item.dropdown) {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.text}</span>
                  {item.dropdown && (
                    <span className="dropdown-arrow">▼</span>
                  )}
                </NavLink>

                {item.dropdown && activeDropdown === index && (
                  <div
                    className="dropdown-menu"
                    onMouseEnter={() => handleDropdownHover(index)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.dropdown.map((dropdownItem, dIndex) => (
                      <NavLink
                        key={dIndex}
                        to={dropdownItem.path}
                        className={({ isActive }) =>
                          `dropdown-item ${isActive ? 'active' : ''}`
                        }
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="dropdown-icon">{dropdownItem.icon}</span>
                        {dropdownItem.text}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

