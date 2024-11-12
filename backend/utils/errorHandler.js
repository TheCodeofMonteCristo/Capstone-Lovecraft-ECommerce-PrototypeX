// utils/errorHandler.js

// Middleware to handle errors globally
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error details for debugging
  
    // Check if the error is an instance of a custom error
    if (err.isCustom) {
      return res.status(err.statusCode).json({
        message: err.message,
        ...(err.details && { details: err.details }), // Include additional error details if available
      });
    }
  
    // Generic error response for unknown errors
    return res.status(500).json({ message: 'Something went wrong, please try again later.' });
  };
  
  // Custom error class to create custom error instances
  class CustomError extends Error {
    constructor(message, statusCode, details = null) {
      super(message);
      this.statusCode = statusCode;
      this.isCustom = true; // Mark it as a custom error
      this.details = details; // Optional additional error details
    }
  }
  
  module.exports = { errorHandler, CustomError };
  