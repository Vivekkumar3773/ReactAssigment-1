import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import './HomePage.css';

// HomePage component for the application
const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className="home-content">
        <h2>Welcome to the Communion App</h2>
        <p>Connecting people of all faiths through events and community support.</p>
        <h2>About Communion App</h2>
        <p>The Communion App helps you find and connect with events that match your interests and faiths. Join us to explore and participate in various events happening around you.</p>
        <h2>Brief Introduction</h2>
        <p>The Communion App is designed to bring people together through shared interests and faith-based events. Whether you are looking to attend a religious gathering, a social event, or a charity fundraiser, our app provides a platform to discover and participate in events that matter to you.</p>
      </section>
    </div>
  );
};

export default HomePage;
