import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const phrases = [
  'EVENT SUCCESSFULLY COMPLETED',
  'AWS LEARNING CELEBRATION',
  'CLOUD INNOVATION ACHIEVED',
  'TECH EXCELLENCE DELIVERED'
];



const Home = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const ticker = setInterval(() => {
      const currentPhrase = phrases[phraseIndex];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearInterval(ticker);
  }, [text, isDeleting, phraseIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 className="home-title">
            <span className="typing-text">{text}</span>
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            className="home-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Thank you for making AWS Cloud Clubs Student Community Day Ahmedabad 2025 a tremendous success! Together we transformed learning into innovation.
          </motion.p>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection('highlights')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW HIGHLIGHTS
            </motion.button>

            <motion.button
              className="btn btn-secondary"
              onClick={() => scrollToSection('calendar')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EVENT DETAILS
            </motion.button>

            <motion.button
              className="btn btn-tertiary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US!
            </motion.button>
          </motion.div>
        </motion.div>


      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
