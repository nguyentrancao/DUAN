import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Center } from "@chakra-ui/react";

const Auth = () => {
  const [isActive, setIsActive] = useState(false);

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  return (
    <Center>
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Tạo tài khoản</h1>
            <div className="social-icons">
              <Link href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>hoặc sử dụng email của bạn để đăng ký</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Nhập lại password" />
            <button type="button">Đăng Kí</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Đăng nhập</h1>
            <div className="social-icons">
              <Link href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
            <span>hoặc sử dụng mật khẩu email của bạn</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <Link href="#">Quên mật khẩu của bạn?</Link>
            <button type="button">Đăng Nhập</button>
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
      </div>
    </Center>
  );
};

export default Auth;
