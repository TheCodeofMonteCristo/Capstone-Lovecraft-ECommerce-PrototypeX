// config/db.js

// Import PrismaClient from Prisma ORM package to interact with the database
const { PrismaClient } = require('@prisma/client');

// Create an instance of PrismaClient to interact with the database
const prisma = new PrismaClient();

/**
 * Initializes the database connection by ensuring Prisma Client is ready
 * This file will be used throughout the app to make queries to the database.
 */

// Wrap the database connection inside an async function that handles any errors during connection
async function connectToDatabase() {
    try {
        // Try to connect to the database
        await prisma.$connect();
        console.log('Database connected successfully');
    } catch (error) {
        // Catch any errors that occur during the connection process and log them
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process if the connection fails
    }
}

// Export the Prisma client instance and the connect function to be used throughout the application
module.exports = {
    prisma,
    connectToDatabase
};
