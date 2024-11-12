// controllers/cityController.js

const { prisma } = require('../config/db'); // Prisma client to interact with the database

/**
 * Creates a new city in the database.
 */
async function createCity(req, res) {
    const { name, description, category, price, imageUrl } = req.body;

    try {
        const newCity = await prisma.city.create({
            data: { name, description, category, price, imageUrl }
        });

        res.status(201).json({ message: 'City created successfully', city: newCity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Retrieves all cities from the database.
 */
async function getCities(req, res) {
    try {
        const cities = await prisma.city.findMany();
        res.status(200).json(cities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Retrieves a single city by its ID.
 */
async function getCityById(req, res) {
    const { id } = req.params;

    try {
        const city = await prisma.city.findUnique({
            where: { id: parseInt(id) }
        });

        if (!city) {
            return res.status(404).json({ message: 'City not found' });
        }

        res.status(200).json(city);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Updates city information by ID.
 */
async function updateCity(req, res) {
    const { id } = req.params;
    const { name, description, category, price, imageUrl } = req.body;

    try {
        const updatedCity = await prisma.city.update({
            where: { id: parseInt(id) },
            data: { name, description, category, price, imageUrl }
        });

        res.status(200).json({ message: 'City updated successfully', city: updatedCity });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Deletes a city by ID.
 */
async function deleteCity(req, res) {
    const { id } = req.params;

    try {
        await prisma.city.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'City deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { createCity, getCities, getCityById, updateCity, deleteCity };
