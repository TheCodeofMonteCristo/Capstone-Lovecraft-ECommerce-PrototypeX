// tests/order.test.js

const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Order Routes', () => {
  let user;
  let city;

  beforeAll(async () => {
    // Set up test user and city
    user = await prisma.user.create({
      data: {
        email: 'user@example.com',
        password: 'password123',
        username: 'testuser',
      },
    });

    city = await prisma.city.create({
      data: {
        name: 'Test City',
        country: 'Testland',
        population: 1000000,
        price: 1000,
      },
    });
  });

  afterAll(async () => {
    // Clean up after tests
    await prisma.order.deleteMany({ where: { userId: user.id } });
    await prisma.city.delete({ where: { id: city.id } });
    await prisma.user.delete({ where: { id: user.id } });
    await prisma.$disconnect();
  });

  describe('POST /orders', () => {
    it('should create an order', async () => {
      const response = await request(app)
        .post('/orders')
        .send({ userId: user.id, cityId: city.id, quantity: 1 });

      expect(response.status).toBe(201);
      expect(response.body.order).toBeDefined();
    });
  });

  describe('GET /orders/:userId', () => {
    it('should return orders for a user', async () => {
      const order = await prisma.order.create({
        data: { userId: user.id, cityId: city.id, quantity: 1 },
      });

      const response = await request(app).get(`/orders/${user.id}`);

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});
