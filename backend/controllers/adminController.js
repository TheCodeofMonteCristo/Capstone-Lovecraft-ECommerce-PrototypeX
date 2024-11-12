// controllers/adminController.js

const { prisma } = require('../config/db'); // Prisma client to interact with the database

/**
 * Deletes a city by ID (admin action).
 */
async function deleteCityAdmin(req, res) {
    const { id } = req.params;

    try {
        await prisma.city.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'City deleted successfully by admin' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Deletes a user by ID (admin action).
 */
async function deleteUserAdmin(req, res) {
    const { id } = req.params;

    try {
        await prisma.user.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'User deleted successfully by admin' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { deleteCityAdmin, deleteUserAdmin };
