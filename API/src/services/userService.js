/* eslint-disable no-useless-catch */
// userService.js

import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import ApiError from '../utils/ApiError'; // Import ApiError
import { userModel } from '../models/userModel'; // Đảm bảo đường dẫn này đúng và sử dụng User model

const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const newUser = {
      ...reqBody,
    };
    const createUser = await userModel.createNew(newUser);

    return createUser;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (userId) => {
  try {
    const user = await userModel.getDetails(userId);
    if (!user) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const findOne = async (email, password) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Email not found');
  }
  // Ensure user.password exists and is not undefined
  if (!user.password) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      'User password not found'
    );
  }
  if (password !== user.password) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Invalid password');
  }
  if (email === 'admin@gmail.com' && password === 'IphoneStore@123') {
    user.role = 'admin';
    await userModel.updateOne({ _id: user._id }, { $set: { role: 'admin' } });
  } else {
    user.role = 'user';
  }

  return user;
};

export const userService = {
  createNew,
  getDetails,
  findOne,
};
