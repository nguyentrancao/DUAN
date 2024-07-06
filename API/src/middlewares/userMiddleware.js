// authMiddleware.js

const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: 'Missing token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Token authentication error:', error);
    res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { authenticateUser, generateToken };
