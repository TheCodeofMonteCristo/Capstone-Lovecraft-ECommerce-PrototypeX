// utils/authMiddleware.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Middleware to check if the user is authenticated
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from authorization header
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided, access denied.' });
    }

    // Validate token (this can be replaced with JWT validation logic)
    const user = await prisma.user.findUnique({
      where: { token }, // Assuming a token field exists to store user session
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid token, access denied.' });
    }

    req.user = user; // Attach user information to the request object
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error while authenticating user.' });
  }
};

// Middleware to check if the user is an admin
const isAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin privileges required.' });
  }
  next(); // If user is admin, continue to next middleware or route handler
};

module.exports = { isAuthenticated, isAdmin };
