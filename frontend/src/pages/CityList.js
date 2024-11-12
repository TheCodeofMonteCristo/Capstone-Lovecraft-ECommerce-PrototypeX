// src/pages/CityList.js

import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard'; // Import the reusable CityCard component

// CityList Component - Displays cities with search and filter functionality
const CityList = () => {
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    // Fetch all cities from the API
    const fetchCities = async () => {
      const response = await fetch('/api/cities');
      const data = await response.json();
      setCities(data);
      setFilteredCities(data); // Initially show all cities
    };

    fetchCities();
  }, []);

  // Handle search input change and filter cities based on the query
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(query)
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="city-list">
      <h1>All Cities</h1>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="city-cards">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))
        ) : (
          <p>No cities found</p>
        )}
      </div>
    </div>
  );
};

export default CityList;
