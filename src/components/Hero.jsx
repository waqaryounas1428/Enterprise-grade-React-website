import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t, language } = useLanguage();

  // Hero background images - 2 images for rotation
  const heroImages = [
    '/images/hero.jpg',
    '/images/hero2.jpg'
  ];

  // Auto rotate images every 8 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="hero">
      {/* Background Images with Rotation */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background-image ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      {/* Transparent Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Pattern */}
      <div className="hero-pattern"></div>

      {/* Content */}
      <div className={`hero-content ${language === 'urdu' ? 'urdu-text' : ''}`}>
        <h1 className="hero-title">
          <span className="hero-title-gradient">{t.heroTitle}</span>
          <br />
          <span>{t.heroSubtitle}</span>
        </h1>
        <p className="hero-subtitle">
          {t.heroTagline}
        </p>
        <p className="hero-description">
          {t.heroDescription}
        </p>
        <div className="hero-buttons">
          <a href="#services" className="hero-btn-primary">
            {t.heroBtn1}
          </a>
          <a href="#contact" className="hero-btn-secondary">
            {t.heroBtn2}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator">
        <FaChevronDown size={32} />
      </a>

      {/* Image Indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
