// src/services/cityService.js

// Function to fetch all cities
export const getCities = async () => {
    try {
      const response = await fetch('/api/cities');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      const cities = await response.json();
      return cities;
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw error;
    }
  };
  
  // Function to fetch a single city's details
  export const getCityDetails = async (cityId) => {
    try {
      const response = await fetch(`/api/cities/${cityId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch city details');
      }
      const cityDetails = await response.json();
      return cityDetails;
    } catch (error) {
      console.error('Error fetching city details:', error);
      throw error;
    }
  };
  
  // Function to fetch featured cities
  export const getFeaturedCities = async () => {
    try {
      const response = await fetch('/api/cities/featured');
      if (!response.ok) {
        throw new Error('Failed to fetch featured cities');
      }
      const featuredCities = await response.json();
      return featuredCities;
    } catch (error) {
      console.error('Error fetching featured cities:', error);
      throw error;
    }
  };
  