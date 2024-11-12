// tests/auth.test.js

const request = require('supertest');
const app = require('../app');  // Assuming the main app is exported from app.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

describe('Authentication Routes', () => {
  let user;
  let token;

  beforeAll(async () => {
    // Create a test user
    user = await prisma.user.create({
      data: {
        email: 'testuser@example.com',
        password: await bcrypt.hash('password123', 10),
        username: 'testuser',
      },
    });
  });

  afterAll(async () => {
    // Clean up test user after tests
    await prisma.user.delete({ where: { id: user.id } });
    await prisma.$disconnect();
  });

  describe('POST /auth/signup', () => {
    it('should sign up a user and return a JWT token', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({
          email: 'newuser@example.com',
          password: 'password123',
          username: 'newuser',
        });

      expect(response.status).toBe(201);
      expect(response.body.token).toBeDefined();
    });

    it('should return error if email is already in use', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({
          email: 'testuser@example.com', // Same email as the initial test user
          password: 'password123',
          username: 'duplicateuser',
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Email already in use');
    });
  });

  describe('POST /auth/login', () => {
    it('should log in a user and return a JWT token', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'testuser@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(200);
      expect(response.body.token).toBeDefined();
    });

    it('should return error if credentials are invalid', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({
          email: 'testuser@example.com',
          password: 'wrongpassword',
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe('Invalid credentials');
    });
  });
});
