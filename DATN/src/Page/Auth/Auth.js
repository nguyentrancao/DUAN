import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Center, Icon } from "@chakra-ui/react";
import { registerUser } from "../../api/AuthApi";
import axios from "axios";
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [setMessage] = useState("");

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Tên người dùng là bắt buộc";
    }
    if (!formData.email) {
      errors.email = "Email là bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Địa chỉ email không hợp lệ";
    }
    if (!formData.password) {
      errors.password = "Mật khẩu là bắt buộc";
    } else if (!/[A-Z]/.test(formData.password)) {
      errors.password = "Mật khẩu phải chứa ít nhất một chữ cái viết hoa";
    } else if (!/[a-z]/.test(formData.password)) {
      errors.password = "Mật khẩu phải chứa ít nhất một chữ cái viết thường";
    } else if (!/[0-9]/.test(formData.password)) {
      errors.password = "Mật khẩu phải chứa ít nhất một chữ số";
    } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
      errors.password = "Mật khẩu phải chứa ít nhất một ký tự đặc biệt";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Mật khẩu không khớp";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      const response = await registerUser(userData);
      console.log("User registered successfully:", response);
      setMessage("Registration successful!");
    } catch (error) {
      console.error("Registration failed:", error.message);
      setMessage(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8017/v2/users/login",
        {
          email,
          password,
        }
      );

      console.log("User logged in successfully:", response.data);
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Center>
        <div className={`container ${isActive ? "active" : ""}`} id="container">
          <div className="form-container sign-up">
            <form onSubmit={handleSubmit}>
              <h1>Tạo tài khoản</h1>
              <div className="social-icons">
                <Link to="#" className="icon">
                  <Icon as={FaGoogle} w={14} h={14} />
                </Link>
                <Link to="#" className="icon">
                  <Icon as={FaFacebook} w={14} h={14} />
                </Link>
                <Link to="#" className="icon">
                  <Icon as={FaGithub} w={14} h={14} />
                </Link>
                <Link to="#" className="icon">
                  <Icon as={FaLinkedin} w={14} h={14} />
                </Link>
              </div>
              <span>hoặc sử dụng email của bạn để đăng ký</span>
              <input type="text" name="username" placeholder="Name" />
              {formErrors.username && (
                <p className="error">{formErrors.username}</p>
              )}
              <input type="email" name="email" placeholder="Email" />
              {formErrors.email && <p className="error">{formErrors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {formErrors.password && (
                <p className="error">{formErrors.password}</p>
              )}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {formErrors.confirmPassword && (
                <p className="error">{formErrors.confirmPassword}</p>
              )}
              <button type="submit">Đăng Kí</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <div>
              <div style={{ textAlign: "center" }}>
                <h1>Đăng Nhập</h1>
                <div
                  className="social-icons"
                  style={{ margin: "auto", width: "fit-content" }}
                >
                  <Link to="#" className="icon">
                    <Icon as={FaGoogle} w={14} h={14} />
                  </Link>
                </div>
              </div>

              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="forgot-password">
                  <Link to="/forgot-password">Đổi mật khẩu?</Link>
                </div>
                <button onClick={handleLogin}>Đăng nhập</button>
              </form>
            </div>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Chào mừng trở lại!</h1>
                <p>
                  Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng
                  của trang web
                </p>
                <button
                  className="hidden"
                  id="login"
                  onClick={handleLoginClick}
                >
                  Đăng Ký
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Chào bạn!</h1>
                <p>
                  Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các
                  tính năng của trang web
                </p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleRegisterClick}
                >
                  Đăng Nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
};

export default Auth;
