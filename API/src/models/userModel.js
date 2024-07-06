import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import { ObjectId } from 'mongodb';
import { GET_DB } from '~/config/mongodb';
import ApiError from '~/utils/ApiError';
import bcrypt from 'bcrypt';

const USER_COLLECTION_NAME = 'Users';
// Define Joi schema
const USER_COLLECTION_SCHEMA = Joi.object({
  username: Joi.string().required().min(3).max(50).trim().strict(),
  password: Joi.string().required().min(3).max(50).trim().strict(),
  fullName: Joi.string().min(3).max(256).trim().strict(),
  phoneNumber: Joi.number(),
  email: Joi.string().email().required(),
  isAdmin: Joi.boolean().default(false),
  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false),
  role: Joi.string().valid('user', 'admin').default('user'), // Thêm trường role vào Joi schema
});
const UNIQUE_EMAIL_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
});
// Define collection name

// Function to validate data before creating
const validateBeforeCreate = async (data) => {
  return await USER_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false,
  });
};
const validateUniqueEmail = async (email) => {
  return await UNIQUE_EMAIL_SCHEMA.validateAsync(
    { email },
    { abortEarly: false }
  );
};

// Functions for database operations
const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Validate data against USER_SCHEMA
    const validatedData = await validateBeforeCreate(reqBody);

    // Validate email uniqueness
    await validateUniqueEmail(reqBody.email);

    const { email, password } = reqBody;

    const existingUser = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .findOne({ email });
    if (existingUser) {
      throw new ApiError(StatusCodes.BAD_REQUEST, 'Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let role = 'user';
    if (email === 'admin@gmail.com' && password === 'IphoneStore@123') {
      role = 'admin';
    }

    const newUser = {
      email,
      password: hashedPassword,
      role,
      ...validatedData, // Include other validated data
    };

    const createUser = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .insertOne(newUser); // Sửa đổi từ createNew thành create
    return createUser;
  } catch (error) {
    throw error;
  }
};

const findOne = async (reqBody) => {
  let email = reqBody.email;
  if (typeof email === 'object' && email !== null) {
    email = email.email; // Truy cập vào thuộc tính email bên trong object
  }

  // eslint-disable-next-line no-useless-catch
  try {
    const user = await GET_DB().collection('Users').findOne({ email });
    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
};

const getDetails = async (id) => {
  try {
    const result = await GET_DB()
      .collection(USER_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

// Export userModel object with functions
export const userModel = {
  USER_COLLECTION_NAME,
  USER_COLLECTION_SCHEMA,
  UNIQUE_EMAIL_SCHEMA,
  createNew,
  findOne,
  getDetails,
};
