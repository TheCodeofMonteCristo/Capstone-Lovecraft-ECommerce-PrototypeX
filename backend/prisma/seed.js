// prisma/seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    // Create some sample cities
    const cities = await prisma.city.createMany({
      data: [
        { name: 'New York', country: 'USA', population: 8419600, price: 1.5 },
        { name: 'Tokyo', country: 'Japan', population: 13929286, price: 1.8 },
        { name: 'Paris', country: 'France', population: 2148327, price: 2.2 },
        { name: 'Berlin', country: 'Germany', population: 3644826, price: 1.4 }
      ]
    });

    // Create a sample user
    const user = await prisma.user.create({
      data: {
        email: 'user@example.com',
        password: 'securepassword', // Use hashed password in real apps
        username: 'john_doe'
      }
    });

    // Create an order for the user
    const order = await prisma.order.create({
      data: {
        status: 'pending',
        userId: user.id,
        cities: {
          connect: [
            { id: 1 }, // Connecting cities by ID
            { id: 2 }
          ]
        }
      }
    });

    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seed();
