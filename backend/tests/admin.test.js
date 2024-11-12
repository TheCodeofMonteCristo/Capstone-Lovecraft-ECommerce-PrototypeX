// tests/admin.test.js

const request = require('supertest');
const app = require('../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Admin Routes', () => {
  let admin;
  let user;
  let city;

  beforeAll(async () => {
    // Create an admin user and regular user
    admin = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: 'adminpassword',
        username: 'admin',
        role: 'admin', // Assuming role field exists
      },
    });

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
    // Clean up
    await prisma.user.deleteMany({ where: { id: admin.id } });
    await prisma.user.deleteMany({ where: { id: user.id } });
    await prisma.city.delete({ where: { id: city.id } });
    await prisma.$disconnect();
  });

  describe('GET /admin/users', () => {
    it('should return all users for admin', async () => {
      const response = await request(app)
        .get('/admin/users')
        .set('Authorization', `Bearer ${adminToken}`); // Assuming adminToken is set

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('DELETE /admin/users/:id', () => {
    it('should allow admin to delete a user', async () => {
      const response = await request(app)
        .delete(`/admin/users/${user.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('User deleted successfully');
    });
  });

  describe('DELETE /admin/cities/:id', () => {
    it('should allow admin to delete a city', async () => {
      const response = await request(app)
        .delete(`/admin/cities/${city.id}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('City deleted successfully');
    });
  });
});
