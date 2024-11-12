// src/components/LoadingSpinner.js

import React from 'react';

// LoadingSpinner Component - A simple spinner to show loading state
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div> {/* CSS spinner animation */}
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
