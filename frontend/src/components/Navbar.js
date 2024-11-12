// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom for navigation

// Navbar Component - Displays the site's main navigation links
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo or Home Link */}
        <Link to="/" className="navbar-logo">
          Squid E-Commerce
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/cities">Cities</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
