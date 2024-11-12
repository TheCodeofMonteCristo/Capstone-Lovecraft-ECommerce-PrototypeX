// controllers/orderController.js

const { prisma } = require('../config/db'); // Prisma client to interact with the database

/**
 * Creates a new order for a user.
 */
async function createOrder(req, res) {
    const { userId, cityIds } = req.body; // cityIds would be an array of selected cities

    try {
        // Create the order and associate it with cities
        const order = await prisma.order.create({
            data: {
                userId,
                status: 'pending', // Initial status
                cities: {
                    connect: cityIds.map(id => ({ id }))
                }
            }
        });

        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Retrieves an order by its ID.
 */
async function getOrderById(req, res) {
    const { id } = req.params;

    try {
        const order = await prisma.order.findUnique({
            where: { id: parseInt(id) },
            include: { cities: true } // Include related cities in the order
        });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Updates the status of an order.
 */
async function updateOrderStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedOrder = await prisma.order.update({
            where: { id: parseInt(id) },
            data: { status }
        });

        res.status(200).json({ message: 'Order status updated successfully', order: updatedOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = { createOrder, getOrderById, updateOrderStatus };
