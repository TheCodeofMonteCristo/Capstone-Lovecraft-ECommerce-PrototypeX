// src/services/authService.js

// Function to handle user login
export const login = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), // Send the login data (username and password)
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      // Store the token and other user data in localStorage or context (depending on app)
      localStorage.setItem('authToken', data.token);
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  // Function to handle user signup
  export const signup = async (userData) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Send the signup data (username, password, etc.)
      });
  
      if (!response.ok) {
        throw new Error('Signup failed');
      }
  
      const data = await response.json();
      return data; // Return the user data (e.g., username, token)
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  };
  
  // Function to handle logout
  export const logout = () => {
    localStorage.removeItem('authToken'); // Remove the stored auth token
  };
  