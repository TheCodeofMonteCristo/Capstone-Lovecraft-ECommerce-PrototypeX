// src/App.js

import React from 'react'; // Importing React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router and Route components for navigation
import Navbar from './components/Navbar'; // Importing the Navbar component for the top navigation bar
import Footer from './components/Footer'; // Importing the Footer component for consistent footer layout
import Home from './pages/Home'; // Importing the Home page component
import CityList from './pages/CityList'; // Importing the CityList page to display a list of cities
import CityDetail from './pages/CityDetail'; // Importing the CityDetail page to show detailed information about a city
import Cart from './pages/Cart'; // Importing the Cart page to display shopping cart contents
import Checkout from './pages/Checkout'; // Importing the Checkout page to handle purchases
import Profile from './pages/Profile'; // Importing the Profile page to manage user account settings
import AdminDashboard from './pages/AdminDashboard'; // Importing the AdminDashboard page for admin functions
import './App.css'; // Importing the main stylesheet for the app

/**
 * The main App component. It sets up routing for the app and includes common layout components
 * like the Navbar and Footer that will be displayed on all pages.
 */
function App() {
  return (
    <Router>
      {/* The Navbar is rendered on all pages */}
      <Navbar />
      
      {/* The Routes component is used to handle different page views based on the URL */}
      <div className="main-content">
        <Routes>
          {/* Define different routes for each page */}
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/cities" element={<CityList />} /> {/* List of cities */}
          <Route path="/city/:id" element={<CityDetail />} /> {/* City details based on city ID */}
          <Route path="/cart" element={<Cart />} /> {/* Shopping cart */}
          <Route path="/checkout" element={<Checkout />} /> {/* Checkout process */}
          <Route path="/profile" element={<Profile />} /> {/* User profile management */}
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin dashboard for management */}
        </Routes>
      </div>
      
      {/* The Footer is rendered on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
