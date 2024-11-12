// server.js

// Import necessary libraries
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const path = require('path');

// Load environment variables from the .env file
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Prisma client to interact with the database
const prisma = new PrismaClient();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) for frontend-backend communication
app.use(express.json()); // Parse JSON bodies in incoming requests
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (like images, stylesheets, etc.)

// Basic route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Squid E-commerce platform!');
});

// Sample route for authentication (protected)
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided, access denied.' });
  }
  
  // Verify the token using JWT secret
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token, access denied.' });
    }
    
    res.json({ message: 'Access granted.', user: decoded });
  });
});

// Database connection test route
app.get('/test-db', async (req, res) => {
  try {
    // Test Prisma client connection
    const cities = await prisma.city.findMany(); // Query cities from the database
    res.json(cities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database connection failed.' });
  }
});

// API routes (you'll define these in separate route files)
const authRoutes = require('./routes/authRoutes');
const cityRoutes = require('./routes/cityRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use the defined routes
app.use('/api/auth', authRoutes); // Authentication-related routes
app.use('/api/cities', cityRoutes); // Routes related to cities (CRUD)
app.use('/api/reviews', reviewRoutes); // Routes related to reviews
app.use('/api/orders', orderRoutes); // Routes related to orders
app.use('/api/admin', adminRoutes); // Routes related to admin functionality

// Global error handling middleware (defined in utils/errorHandler.js)
const { errorHandler } = require('./utils/errorHandler');
app.use(errorHandler); // Catch-all for errors that occur in the request lifecycle

// Start the server
const port = process.env.PORT || 5000; // Use port from .env or default to 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
