// src/pages/CityDetail.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams to get dynamic URL params
import ReviewForm from '../components/ReviewForm'; // Import the ReviewForm component

// CityDetail Component - Displays detailed information about a city and its reviews
const CityDetail = () => {
  const { cityId } = useParams(); // Extract the cityId from the URL
  const [city, setCity] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch city details and reviews based on cityId from the API
    const fetchCityDetails = async () => {
      const cityResponse = await fetch(`/api/cities/${cityId}`);
      const reviewsResponse = await fetch(`/api/cities/${cityId}/reviews`);
      const cityData = await cityResponse.json();
      const reviewsData = await reviewsResponse.json();
      setCity(cityData);
      setReviews(reviewsData);
    };

    fetchCityDetails();
  }, [cityId]);

  // Handle review submission
  const handleReviewSubmit = async (review) => {
    const response = await fetch(`/api/cities/${cityId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ review }),
    });
    const newReview = await response.json();
    setReviews([...reviews, newReview]); // Add new review to the existing list
  };

  if (!city) {
    return <p>Loading city details...</p>;
  }

  return (
    <div className="city-detail">
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <div className="reviews">
        <h2>Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => <p key={review.id}>{review.text}</p>)
        ) : (
          <p>No reviews yet</p>
        )}
        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>
    </div>
  );
};

export default CityDetail;
