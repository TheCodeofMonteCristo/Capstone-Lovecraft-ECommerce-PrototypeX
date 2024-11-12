// config/env.js

// Import dotenv to load environment variables from a .env file
const dotenv = require('dotenv');

// Load the environment variables from the .env file into process.env
dotenv.config();

/**
 * This file is responsible for loading and ensuring the availability
 * of critical environment variables used across the application.
 * All environment variables should be defined in a .env file.
 */

// Example of loading sensitive environment variables
const DATABASE_URL = process.env.DATABASE_URL;  // Database connection string
const JWT_SECRET = process.env.JWT_SECRET;  // Secret key for JWT authentication

// Check if required environment variables are loaded, if not log an error
if (!DATABASE_URL || !JWT_SECRET) {
    console.error('Missing required environment variables.');
    process.exit(1); // Exit the process if important variables are missing
}

// Export the variables to make them available in other files
module.exports = {
    DATABASE_URL,
    JWT_SECRET
};
