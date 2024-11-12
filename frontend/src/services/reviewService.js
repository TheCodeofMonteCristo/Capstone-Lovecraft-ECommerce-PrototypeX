// src/services/reviewService.js

// Function to fetch reviews for a specific city
export const getReviews = async (cityId) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews`);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  };
  
  // Function to submit a review for a specific city
  export const submitReview = async (cityId, reviewData) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Include auth token
        },
        body: JSON.stringify(reviewData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
  
      const newReview = await response.json();
      return newReview;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  };
  