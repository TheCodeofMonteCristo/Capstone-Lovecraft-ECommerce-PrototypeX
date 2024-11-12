// utils/validation.js
const validator = require('validator');

// Validate user registration data
const validateUserRegistration = (data) => {
  const { email, username, password } = data;
  const errors = [];

  // Validate email format
  if (!validator.isEmail(email)) {
    errors.push('Invalid email format.');
  }

  // Validate username length
  if (username.length < 3 || username.length > 20) {
    errors.push('Username must be between 3 and 20 characters.');
  }

  // Validate password strength
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long.');
  }

  return errors; // Returns an array of errors or an empty array if valid
};

// Validate city creation data
const validateCityData = (data) => {
  const { name, country, population, price } = data;
  const errors = [];

  // Validate city name
  if (!name || name.length < 3) {
    errors.push('City name must be at least 3 characters long.');
  }

  // Validate country name
  if (!country || country.length < 3) {
    errors.push('Country name must be at least 3 characters long.');
  }

  // Validate population (should be a positive number)
  if (isNaN(population) || population <= 0) {
    errors.push('Population must be a positive number.');
  }

  // Validate price (should be a positive number)
  if (isNaN(price) || price <= 0) {
    errors.push('Price must be a positive number.');
  }

  return errors; // Returns an array of errors or an empty array if valid
};

module.exports = { validateUserRegistration, validateCityData };
