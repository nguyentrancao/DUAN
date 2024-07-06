// utils/ApiError.js

import { StatusCodes } from 'http-status-codes';

class ApiError extends Error {
  constructor(
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    message = 'Internal server error'
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ApiError;
