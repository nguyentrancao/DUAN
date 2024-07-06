import express from 'express';
import { userValidation } from '~/validations/userValidation'; // Import validation functions for user
import { userController } from '~/controllers/userController'; // Import controller functions for user // Import middleware for user

const Router = express.Router(); // Tạo một Router mới từ Express

// // Định nghĩa endpoint cho việc đăng nhập người dùng
// Router.post('/login', userController.registerUser);

// Định nghĩa endpoint để tạo người dùng mới
// Router.post('/', userValidation.createNew, userController.registerUser);
Router.route('/').post(userValidation.createNew, userController.registerUser);
Router.route('/login').post(userController.loginUser);
// Định nghĩa endpoint để lấy chi tiết người dùng dựa trên ID
// Router.get('/:id', userController.getDetails);

// Định nghĩa endpoint để cập nhật người dùng dựa trên ID
// Router.put('/:id', userMiddleware, (req, res) => {
//   res.status(StatusCodes.OK).json({ message: 'Cập nhật người dùng theo ID' });
// });

// Định nghĩa endpoint để xử lý các yêu cầu GET khác (nếu cần)
// Router.get('/', (req, res) => {
//   res
//     .status(StatusCodes.OK)
//     .json({ message: 'Chú thích: API lấy danh sách bảng.' });
// });

export const userRoute = Router;
