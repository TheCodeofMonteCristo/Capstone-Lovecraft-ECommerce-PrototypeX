// src/state/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cityReducer from './citySlice';

// Configure the Redux store with the slices for user and city
export const store = configureStore({
  reducer: {
    user: userReducer,  // User-related state and actions will be handled by userReducer
    cities: cityReducer, // City-related state and actions will be handled by cityReducer
  },
});

// Exporting the store to be used in the application
export default store;
