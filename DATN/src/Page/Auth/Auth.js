import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { loginUser, registerUser } from "../../api/AuthApi"; // Import các hàm API từ AuthApi.js

const Auth = ({ setUser }) => {
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  // Function to handle errors and display error messages
  const handleError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 5000); // Clear error message after 5 seconds
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    // Kiểm tra các điều kiện của form đăng ký
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      handleError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      handleError("Passwords do not match");
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (formData.password.length < 6) {
      handleError("Password must be at least 6 characters");
      return;
    }

    // Kiểm tra ký tự đặc biệt trong mật khẩu
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialChars.test(formData.password)) {
      handleError("Password must contain at least one special character");
      return;
    }

    try {
      const data = await registerUser(formData); // Gửi yêu cầu đăng ký tới backend
      setUser(data); // Lưu thông tin người dùng sau khi đăng ký thành công
      handleError(""); // Xóa thông báo lỗi nếu thành công
    } catch (error) {
      handleError(error.message); // Xử lý và hiển thị thông báo lỗi từ backend
    }
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Kiểm tra các điều kiện của form đăng nhập
    if (!formData.email || !formData.password) {
      handleError("Please fill in all fields");
      return;
    }

    try {
      const data = await loginUser(formData); // Gửi yêu cầu đăng nhập tới backend
      setUser(data); // Lưu thông tin người dùng sau khi đăng nhập thành công
      handleError(""); // Xóa thông báo lỗi nếu thành công
    } catch (error) {
      handleError(error.message); // Xử lý và hiển thị thông báo lỗi từ backend
    }
  };

  return (
    <Center>
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={onSubmitRegister}>
            <h1>Tạo tài khoản</h1>
            <div className="social-icons">
              <Link to="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>hoặc sử dụng email của bạn để đăng ký</span>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại password"
            />
            <button type="submit">Đăng Kí</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={onSubmitLogin}>
            <h1>Đăng nhập</h1>
            <div className="social-icons">
              <Link to="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link to="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>hoặc sử dụng mật khẩu email của bạn</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <Link to="#">Quên mật khẩu của bạn?</Link>
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Chào mừng trở lại!</h1>
              <p>
                Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng
                của trang web
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Đăng nhập
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Chào bạn!</h1>
              <p>
                Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính
                năng của trang web
              </p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </Center>
  );
};

export default Auth;
