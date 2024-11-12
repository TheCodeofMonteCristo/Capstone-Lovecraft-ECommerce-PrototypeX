// src/services/adminService.js

// Function to fetch all cities for admin management
export const getCitiesForAdmin = async () => {
    try {
      const response = await fetch('/api/admin/cities', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Admin needs auth token
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch cities for admin');
      }
  
      const cities = await response.json();
      return cities;
    } catch (error) {
      console.error('Error fetching cities for admin:', error);
      throw error;
    }
  };
  
  // Function to fetch all users for admin management
  export const getUsersForAdmin = async () => {
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Admin needs auth token
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch users for admin');
      }
  
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching users for admin:', error);
      throw error;
    }
  };
  
  // Function to update city information (admin use)
  export const updateCity = async (cityId, cityData) => {
    try {
      const response = await fetch(`/api/admin/cities/${cityId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Admin needs auth token
        },
        body: JSON.stringify(cityData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update city');
      }
  
      const updatedCity = await response.json();
      return updatedCity;
    } catch (error) {
      console.error('Error updating city:', error);
      throw error;
    }
  };
  