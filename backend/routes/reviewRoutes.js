// routes/reviewRoutes.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Create a new review for a city
router.post('/:cityId', async (req, res) => {
  const { cityId } = req.params;
  const { userId, content, rating } = req.body;

  try {
    const review = await prisma.review.create({
      data: {
        content,
        rating,
        cityId: parseInt(cityId),
        userId,
      },
    });

    res.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all reviews for a city
router.get('/:cityId', async (req, res) => {
  const { cityId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { cityId: parseInt(cityId) },
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a review by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content, rating } = req.body;

  try {
    const review = await prisma.review.update({
      where: { id: parseInt(id) },
      data: { content, rating },
    });

    res.status(200).json({ message: 'Review updated successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a review by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const review = await prisma.review.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'Review deleted successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
