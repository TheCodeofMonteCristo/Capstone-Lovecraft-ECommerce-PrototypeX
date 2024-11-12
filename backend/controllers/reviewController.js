// controllers/reviewController.js

const { prisma } = require('../config/db'); // Prisma client to interact with the database

/**
 * Creates a review for a city.
 */
async function createReview(req, res) {
    const { cityId, userId, reviewText, rating } = req.body;

    try {
        // Ensure the user has not already reviewed this city
        const existingReview = await prisma.review.findFirst({
            where: { cityId, userId }
        });

        if (existingReview) {
            return res.status(400).json({ message: 'You have already reviewed this city' });
        }

        const newReview = await prisma.review.create({
            data: { cityId, userId, reviewText, rating }
        });

        res.status(201).json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Retrieves all reviews for a specific city.
 */
async function getReviewsByCity(req, res) {
    const { cityId } = req.params;

    try {
        const reviews = await prisma.review.findMany({
            where: { cityId: parseInt(cityId) }
        });

        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Deletes a review by its ID.
 */
async function deleteReview(req, res) {
    const { id } = req.params;

    try {
        await prisma.review.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Edits an existing review.
 */
async function editReview(req, res) {
    const { id } = req.params;
    const { reviewText, rating } = req.body;

    try {
        const updatedReview = await prisma.review.update({
            where: { id: parseInt(id) },
            data: { reviewText, rating }
        });

        res.status(200).json({ message: 'Review updated successfully', review: updatedReview });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { createReview, getReviewsByCity, deleteReview, editReview };
