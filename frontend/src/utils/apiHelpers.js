// src/utils/apiHelpers.js

/**
 * This function processes the API response to check for errors and return the data.
 * It handles both successful and failed API responses.
 * 
 * @param {Response} response - The response object from a fetch request.
 * @returns {Promise<any>} - Returns a promise resolving to the data if successful, or throws an error if failed.
 */
const handleApiResponse = async (response) => {
    if (!response.ok) {
      // If the response is not ok, throw an error with the response message
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }
    // Parse the response as JSON if successful
    return response.json();
  };
  
  /**
   * This function handles API error responses by displaying an error message.
   * It can be used to handle global API errors and log them if needed.
   * 
   * @param {Error} error - The error object thrown by the API call.
   */
  const handleApiError = (error) => {
    console.error('API Error:', error);
    // Show a user-friendly error message
    alert('An error occurred while processing your request. Please try again.');
  };
  
  export { handleApiResponse, handleApiError };
  