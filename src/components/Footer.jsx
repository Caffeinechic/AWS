import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (sectionId) => {
    // Check if trying to navigate to events page
    if (sectionId === 'events') {
      window.location.hash = '#events';
      return;
    }

    // For other sections, check if we're on events page
    if (window.location.hash === '#events') {
      // If on events page, navigate to home first
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Normal scrolling on main page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="footer-title">AWS</h3>
          <p>Building the future with AI-powered solutions</p>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><a onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }}>Home</a></li>
            <li><a onClick={() => handleNavigation('about')} style={{ cursor: 'pointer' }}>About</a></li>
            <li><a onClick={() => handleNavigation('calendar')} style={{ cursor: 'pointer' }}>Calendar</a></li>
            <li><a onClick={() => handleNavigation('events')} style={{ cursor: 'pointer' }}>Events</a></li>
            <li><a onClick={() => handleNavigation('contact')} style={{ cursor: 'pointer' }}>Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4>Connect</h4>
          <div className="social-links">
            {['TW', 'LI', 'GH', 'FB'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="social-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4>Contact</h4>
          <p>info@aws-tech.com</p>
          <p>+1 234 567 890</p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} AWS Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;