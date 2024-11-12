// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard'; // Import the reusable CityCard component

// Home Component - Displays featured cities on the homepage
const Home = () => {
  const [featuredCities, setFeaturedCities] = useState([]);

  useEffect(() => {
    // Fetch featured cities from the API (or mock data)
    const fetchFeaturedCities = async () => {
      const response = await fetch('/api/cities/featured');
      const data = await response.json();
      setFeaturedCities(data);
    };

    fetchFeaturedCities();
  }, []);

  return (
    <div className="home">
      <h1>Featured Cities</h1>
      <div className="city-list">
        {featuredCities.length > 0 ? (
          featuredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))
        ) : (
          <p>Loading featured cities...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
