// routes/cityRoutes.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Create a new city
router.post('/', async (req, res) => {
  const { name, country, population, price } = req.body;

  try {
    const city = await prisma.city.create({
      data: { name, country, population, price },
    });
    res.status(201).json({ message: 'City created successfully', city });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all cities
router.get('/', async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a city by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const city = await prisma.city.findUnique({
      where: { id: parseInt(id) },
    });

    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a city by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, country, population, price } = req.body;

  try {
    const city = await prisma.city.update({
      where: { id: parseInt(id) },
      data: { name, country, population, price },
    });

    res.status(200).json({ message: 'City updated successfully', city });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a city by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const city = await prisma.city.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: 'City deleted successfully', city });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
