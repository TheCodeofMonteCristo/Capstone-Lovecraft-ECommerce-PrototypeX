// src/utils/formatPrice.js

/**
 * This function formats a price value into a consistent currency format.
 * It ensures that all prices are displayed in the desired format (e.g., $12.99).
 * 
 * @param {number} price - The price value to be formatted.
 * @param {string} currency - The currency symbol, default is "$".
 * @returns {string} - The formatted price string (e.g., "$12.99").
 */
const formatPrice = (price, currency = '$') => {
    // Ensure the price is a number
    if (isNaN(price)) {
      throw new Error('Invalid price value');
    }
  
    // Format the price to two decimal places and prepend the currency symbol
    return `${currency}${price.toFixed(2)}`;
  };
  
  export default formatPrice;
  