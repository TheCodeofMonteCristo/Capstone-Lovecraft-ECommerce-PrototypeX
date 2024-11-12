// src/state/citySlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the city slice
const initialState = {
  cities: [], // Initially, the cities array is empty
  featuredCities: [], // Initially, no featured cities
  cityDetails: null, // Initially, no city details are selected
  status: 'idle', // The status of any city-related request (e.g., loading, success)
  error: null, // If there's an error while fetching cities or details
};

// Create the city slice to manage city state and actions
const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    // Action to set the list of cities
    setCities(state, action) {
      state.cities = action.payload; // Update the cities array with the fetched data
    },
    // Action to set featured cities
    setFeaturedCities(state, action) {
      state.featuredCities = action.payload; // Update the featured cities list
    },
    // Action to set the details of a selected city
    setCityDetails(state, action) {
      state.cityDetails = action.payload; // Store the city details for the selected city
    },
    // Action to set loading or error states (e.g., during city data fetching)
    setStatus(state, action) {
      state.status = action.payload; // Set status (e.g., loading, idle)
    },
    // Action to set an error state if fetching cities or details fails
    setError(state, action) {
      state.error = action.payload; // Store error message
    },
  },
});

// Exporting actions from the city slice
export const { setCities, setFeaturedCities, setCityDetails, setStatus, setError } = citySlice.actions;

// Exporting the city slice reducer to be added to the Redux store
export default citySlice.reducer;
