import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

// HeroSection component for the homepage
const HeroSection = () => {
  const navigate = useNavigate();

  // Handle click event for the CTA button
  const handleCTAClick = () => {
    navigate('/events');
  };

  return (
    <section className="hero">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Our app helps you find and connect with events that match your interests and faiths.</p>
      <button onClick={handleCTAClick}>Explore Events</button>
    </section>
  );
};

export default HeroSection;
