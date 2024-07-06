import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { userRoute } from './userRoute'; // Import userRoute để sử dụng như một middleware

const Router = express.Router(); // Tạo một Router mới từ Express

// Định nghĩa endpoint để kiểm tra trạng thái của APIs V2
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs V2 are ready to use.' });
});

// Sử dụng userRoute cho endpoint '/users'
Router.use('/users', userRoute);

export const APIs_V2 = Router; // Xuất Router để sử dụng trong các module khác
