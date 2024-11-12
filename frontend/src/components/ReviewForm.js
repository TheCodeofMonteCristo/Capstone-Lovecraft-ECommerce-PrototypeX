// src/components/ReviewForm.js

import React, { useState } from 'react';

// ReviewForm Component - Allows users to submit or edit reviews for a city
const ReviewForm = ({ onSubmit, existingReview = "" }) => {
  const [review, setReview] = useState(existingReview);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(review); // Trigger onSubmit prop to handle the review submission
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <label htmlFor="review">Your Review:</label>
      <textarea
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
      ></textarea>
      <button type="submit" className="btn">
        {existingReview ? "Update Review" : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
