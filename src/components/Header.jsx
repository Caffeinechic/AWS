import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'events') {
      window.location.hash = '#events';
      setIsMenuOpen(false);
      return;
    }

    if (window.location.hash === '#events') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'highlights', label: 'Event Highlights' },
    { id: 'calendar', label: 'Agenda' },
    { id: 'events', label: 'Speakers' },
    { id: 'contact', label: 'Get In Touch' }
  ];

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="https://in3700.wordpress.com/wp-content/uploads/2025/11/group-2085663055-2.png" 
            alt="AWS Logo" 
            className="logo-image" 
          />
          <div className="logo-glow"></div>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, textShadow: "0 0 8px #8B5CF6" }}
              >
                {item.label}
                <div className="nav-underline"></div>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
