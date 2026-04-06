const { connect, close, clear } = require('../setup');
const { registerUser, loginUser } = require('../../controllers/authController');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');

// Mock request and response
const mockRequest = (body) => ({
  body,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Auth Controller Unit Tests', () => {
  beforeAll(async () => {
    await connect();
    process.env.JWT_SECRET = 'testsecret';
    process.env.JWT_EXPIRE = '30d';
  });
  
  afterAll(async () => {
    await close();
  });
  
  beforeEach(async () => {
    await clear();
  });

  describe('registerUser', () => {
    it('should register a new user successfully', async () => {
      const req = mockRequest({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
      const res = mockResponse();

      await registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Test User',
          email: 'test@example.com',
          token: expect.any(String)
        })
      );
    });

    it('should return 400 if user already exists', async () => {
      await User.create({
        name: 'Existing User',
        email: 'test@example.com',
        password: 'password123'
      });

      const req = mockRequest({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
      const res = mockResponse();

      await registerUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'User already exists' });
    });
  });
});
