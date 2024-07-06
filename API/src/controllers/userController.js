// userController.js

import { StatusCodes } from 'http-status-codes';
const { userService } = require('~/services/userService'); // Import model User

// Đăng ký người dùng mới
const registerUser = async (req, res, next) => {
  try {
    const createBoard = await userService.createNew(req.body);
    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error);
  }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.findOne(email, password);
    if (!user) {
      return res.status(404).json({ message: 'Người dùng không tồn tại' });
    }

    if (password !== user.password) {
      return res
        .status(401)
        .json({ message: 'Thông tin đăng nhập không đúng' });
    }

    // If user exists and passwords match, login successful
    res.status(200).json({ message: 'Đăng nhập thành công' });
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng thử lại' });
  }
};

export const userController = {
  registerUser,
  loginUser,
};
