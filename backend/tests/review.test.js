// tests/review.test.js

const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Review Routes', () => {
  let city;
  let user;

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
    // Clean up test user and city after tests
    await prisma.review.deleteMany({ where: { cityId: city.id } });
    await prisma.city.delete({ where: { id: city.id } });
    await prisma.user.delete({ where: { id: user.id } });
    await prisma.$disconnect();
  });

  describe('POST /reviews/:cityId', () => {
    it('should create a review for a city', async () => {
      const response = await request(app)
        .post(`/reviews/${city.id}`)
        .send({
          userId: user.id,
          content: 'Great city!',
          rating: 5,
        });

      expect(response.status).toBe(201);
      expect(response.body.review.content).toBe('Great city!');
    });
  });

  describe('PUT /reviews/:id', () => {
    it('should update a review', async () => {
      const review = await prisma.review.create({
        data: {
          content: 'Old review',
          rating: 3,
          cityId: city.id,
          userId: user.id,
        },
      });

      const response = await request(app)
        .put(`/reviews/${review.id}`)
        .send({ content: 'Updated review', rating: 4 });

      expect(response.status).toBe(200);
      expect(response.body.review.content).toBe('Updated review');
    });
  });

  describe('DELETE /reviews/:id', () => {
    it('should delete a review', async () => {
      const review = await prisma.review.create({
        data: {
          content: 'Review to be deleted',
          rating: 3,
          cityId: city.id,
          userId: user.id,
        },
      });

      const response = await request(app).delete(`/reviews/${review.id}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Review deleted successfully');
    });
  });
});
