// tests/city.test.js

const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('City Routes', () => {
  let city;

  beforeAll(async () => {
    // Create a test city
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
    // Clean up test city after tests
    await prisma.city.delete({ where: { id: city.id } });
    await prisma.$disconnect();
  });

  describe('POST /cities', () => {
    it('should create a new city', async () => {
      const response = await request(app)
        .post('/cities')
        .send({
          name: 'New City',
          country: 'Newland',
          population: 500000,
          price: 2000,
        });

      expect(response.status).toBe(201);
      expect(response.body.city.name).toBe('New City');
    });
  });

  describe('GET /cities', () => {
    it('should return all cities', async () => {
      const response = await request(app).get('/cities');

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /cities/:id', () => {
    it('should return a specific city by ID', async () => {
      const response = await request(app).get(`/cities/${city.id}`);

      expect(response.status).toBe(200);
      expect(response.body.name).toBe(city.name);
    });

    it('should return error if city is not found', async () => {
      const response = await request(app).get('/cities/999999');

      expect(response.status).toBe(404);
      expect(response.body.message).toBe('City not found');
    });
  });

  describe('PUT /cities/:id', () => {
    it('should update city details', async () => {
      const response = await request(app)
        .put(`/cities/${city.id}`)
        .send({
          name: 'Updated City',
          country: 'Updatedland',
          population: 1500000,
          price: 2500,
        });

      expect(response.status).toBe(200);
      expect(response.body.city.name).toBe('Updated City');
    });
  });

  describe('DELETE /cities/:id', () => {
    it('should delete a city by ID', async () => {
      const response = await request(app).delete(`/cities/${city.id}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('City deleted successfully');
    });
  });
});
