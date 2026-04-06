const request = require('supertest');
const { connect, close, clear } = require('../setup');
const app = require('../../server');
const User = require('../../models/User');
const Product = require('../../models/Product');

describe('API Integration Tests', () => {
  beforeAll(async () => {
    await connect();
    process.env.JWT_SECRET = 'testsecret';
    process.env.NODE_ENV = 'test';
  });

  afterAll(async () => {
    await close();
  });

  beforeEach(async () => {
    await clear();
  });

  describe('Auth API', () => {
    it('should register and login a user', async () => {
      // Register
      const regRes = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Integration Test',
          email: 'int@test.com',
          password: 'password123'
        });
      
      expect(regRes.statusCode).toBe(201);
      expect(regRes.body).toHaveProperty('token');

      // Login
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'int@test.com',
          password: 'password123'
        });

      expect(loginRes.statusCode).toBe(200);
      expect(loginRes.body.email).toBe('int@test.com');
    });
  });

  describe('Product API', () => {
    it('should fetch all products', async () => {
      await Product.create({
        title: 'Test Product',
        description: 'Test Description',
        price: 100,
        image: 'test.jpg',
        category: 'Test Category',
        countInStock: 5
      });

      const res = await request(app).get('/api/products');
      
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0].title).toBe('Test Product');
    });
  });
});
