import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import './App.css';

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* Remove the route for the About page */}
      </Routes>
    </Router>
  );
}

export default App;
