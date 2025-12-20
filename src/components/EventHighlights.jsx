import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTrophy, 
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import './EventHighlights.css';

const highlights = [
  {
    id: 1,
    title: 'Career Guidance in AWS and Cloud',
    description: 'Dr. Bishwajit Mohapatra shared valuable insights on building successful careers in AWS and cloud computing, guiding students through industry pathways and professional development opportunities',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55 (1).jpeg',
    gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)'
  },
  {
    id: 2,
    title: 'Deep Dive into Amazon SageMaker AI',
    description: 'Mr. Udit Parekh delivered an insightful session on Amazon SageMaker, providing attendees with comprehensive knowledge about AI stacks and machine learning capabilities on AWS',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55.jpeg',
    gradient: 'linear-gradient(135deg, rgba(240, 147, 251, 0.8) 0%, rgba(245, 87, 108, 0.8) 100%)'
  },
  {
    id: 3,
    title: 'Spec - Driven Development with KIRO',
    description: 'Mr. Ashish Patel presented an insightful session on Amazon KIRO IDE, demonstrating spec-driven development practices and its capabilities for modern application development on AWS',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55 (2).jpeg',
    gradient: 'linear-gradient(135deg, rgba(79, 172, 254, 0.8) 0%, rgba(0, 242, 254, 0.8) 100%)'
  },
  {
    id: 4,
    title: 'AWS Members Led Workshop',
    description: 'AWS community members led engaging hands-on workshops, guiding students through practical AWS services and helping them build real-world cloud applications',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55 (3).jpeg',
    gradient: 'linear-gradient(135deg, rgba(67, 233, 123, 0.8) 0%, rgba(56, 249, 215, 0.8) 100%)'
  },
  {
    id: 5,
    title: 'Edge Computing Workshop',
    description: 'A specialized track focused on explaining edge device architecture and implementation, providing attendees with hands-on experience in AWS edge computing technologies',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.56.jpeg',
    gradient: 'linear-gradient(135deg, rgba(250, 112, 154, 0.8) 0%, rgba(254, 225, 64, 0.8) 100%)'
  },
  {
    id: 6,
    title: 'DeepRacer Simulation',
    description: 'Students engaged in xciting AWS DeepRacer simulations, learning about reinforcement learning and training autonomous racing models through interactive hands-on sessions',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55 Deepracer.jpeg',
    gradient: 'linear-gradient(135deg, rgba(255, 167, 81, 0.8) 0%, rgba(255, 226, 89, 0.8) 100%)'
  },
  {
    id: 7,
    title: 'Recognizing the Forces Behind This Initiative',
    description: 'We honored and acknowledged the driving forces behind this initiative, expressing gratitude to dedicated individuals whose constant support ensured the seamless execution and success of the event',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.55 (4).jpeg',
    gradient: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
    imagePosition: 'center 30%'
  },
  {
    id: 8,
    title: 'Cultural Celebrations',
    description: 'The event featured an engaging cultural segment, celebrating diversity and talent through performances that enriched the overall experience and fostered community spirit among participants',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.56 (1).jpeg',
    gradient: 'linear-gradient(135deg, rgba(240, 147, 251, 0.8) 0%, rgba(245, 87, 108, 0.8) 100%)'
  },
  {
    id: 9,
    title: 'Moments of Joy and Connection',
    description: 'Attendees actively participated and enjoyed the cultural performances, creating memorable moments of joy, fostering community connections, and experiencing the vibrant spirit of the event',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.11.56 (2).jpeg',
    gradient: 'linear-gradient(135deg, rgba(79, 172, 254, 0.8) 0%, rgba(0, 242, 254, 0.8) 100%)'
  },
  {
    id: 10,
    title: 'Memorable Moments',
    description: 'Capturing the unforgettable experiences and cherished memories created during AWS Cloud Clubs Student Community Day Ahmedabad 2025',
    image: '/images/After_Event/WhatsApp Image 2025-12-17 at 20.12.06.jpeg',
    gradient: 'linear-gradient(135deg, rgba(67, 233, 123, 0.8) 0%, rgba(56, 249, 215, 0.8) 100%)'
  }
];

const EventHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%'
    }),
    center: {
      x: 0
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%'
    })
  };

  return (
    <section id="highlights" className="event-highlights">
      <div className="highlights-container">
        <motion.div
          className="highlights-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Event Highlights</h2>
          <div className="title-line"></div>
          <p className="section-subtitle">
            Here's what made <b>AWS Cloud Clubs Student Community Day Ahmedabad 2025</b> special
          </p>
        </motion.div>

        <div className="carousel-wrapper">
          <motion.button
            className="carousel-nav prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft />
          </motion.button>

          <div className="carousel-container" ref={carouselRef}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.6, ease: [0.32, 0.72, 0, 1] }
                }}
                className="carousel-slide"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, { offset, velocity }) => {
                  setIsDragging(false);
                  if (offset.x > 100) {
                    prevSlide();
                  } else if (offset.x < -100) {
                    nextSlide();
                  }
                }}
              >
                <div 
                  className="highlight-card"
                  style={{ background: highlights[currentIndex].gradient }}
                >
                  <img 
                    src={highlights[currentIndex].image}
                    alt={highlights[currentIndex].title}
                    className="highlight-image"
                    style={{ objectPosition: highlights[currentIndex].imagePosition || 'center' }}
                  />
                  
                  <button 
                    className="toggle-content-btn"
                    onClick={() => setShowContent(!showContent)}
                    title={showContent ? "Hide text" : "Show text"}
                  >
                    {showContent ? <FaEyeSlash /> : <FaEye />}
                  </button>

                  {showContent && (
                    <>
                      <div className="highlight-overlay"></div>
                      
                      <div className="highlight-content">
                        <motion.h3
                          className="highlight-title"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {highlights[currentIndex].title}
                        </motion.h3>

                        <motion.p
                          className="highlight-description"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {highlights[currentIndex].description}
                        </motion.p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="carousel-nav next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>

        <div className="carousel-indicators">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
    