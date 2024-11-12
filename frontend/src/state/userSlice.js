// src/state/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  user: null, // Initially, no user is logged in
  status: 'idle', // This will track the status of any user-related requests (e.g., loading, success)
  error: null, // If there's an error (e.g., failed login/signup), it will be stored here
};

// Create the user slice to manage user state and actions
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user data (e.g., after login)
    setUser(state, action) {
      state.user = action.payload; // Store the user data in the state
    },
    // Action to clear the user data (e.g., after logout)
    logout(state) {
      state.user = null; // Reset user data to null
    },
    // Action to set loading or error states (e.g., during login/signup requests)
    setStatus(state, action) {
      state.status = action.payload; // Set status (e.g., loading, idle)
    },
    // Action to set an error state (e.g., if login/signup fails)
    setError(state, action) {
      state.error = action.payload; // Set error message
    },
  },
});

// Exporting actions from the user slice
export const { setUser, logout, setStatus, setError } = userSlice.actions;

// Exporting the user slice reducer to be added to the Redux store
export default userSlice.reducer;
