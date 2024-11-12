// src/components/CityCard.js

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation to city details page

// CityCard Component - Displays individual city details in a card layout
const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} className="city-card-image" />
      <div className="city-card-info">
        <h3>{city.name}</h3>
        <p>{city.description}</p>
        <Link to={`/cities/${city.id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
};

export default CityCard;
