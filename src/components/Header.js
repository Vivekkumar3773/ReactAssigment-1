import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// Header component for the application
const Header = () => {
  return (
    <header>
      <div className="logo">Communion App</div>
      <nav>
        <ul>
          <li>
            {/* NavLink for Home page */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* NavLink for Events page */}
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
