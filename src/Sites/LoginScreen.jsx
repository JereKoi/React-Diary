import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import "./LoginScreenStyle.css";

const LoginScreen = () => {
  const [isActive, setIsActive] = useState(false); // false means not active, true means active
  const navigate = useNavigate(); // Get the navigate function

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.backendUrl}/user/signin`,
        loginFormData
      );
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error.response.data);
      // Handle error response
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.backendUrl}/user/signup`,
        registerFormData
      );
      console.log(response.data);
      // Handle success response
    } catch (error) {
      console.error(error.response.data);
      // Handle error response
    }
  };

  return (
    <div className={`wrapper ${isActive ? "active" : ""}`}>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#" onSubmit={loginUser}>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginFormData.email}
              onChange={handleLoginChange}
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={handleLoginChange}
              required
            ></input>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input>
              Remember me
            </label>
            <div className="forgot">
              <p>
                <button
                  className="forgot-link"
                  type="button"
                  onClick={() => navigate("/ForgotForm")}
                >
                  Forgot password?
                </button>
              </p>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                className="register-link"
              >
                Register
              </button>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#" onSubmit={registerUser}>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-user"></i>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={registerFormData.name}
              onChange={handleRegisterChange}
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerFormData.email}
              onChange={handleRegisterChange}
              required
            ></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerFormData.password}
              onChange={handleRegisterChange}
              required
            ></input>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox"></input>I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                className="login-link"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
