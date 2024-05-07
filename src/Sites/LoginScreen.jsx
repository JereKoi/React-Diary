import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreenStyle.css";

const LoginScreen = () => {
  const [isActive, setIsActive] = useState(false); // false means not active, true means active
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div className={`wrapper ${isActive ? "active" : ""}`}>
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" placeholder="Email" required></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" placeholder="Password" required></input>
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
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-user"></i>
            </span>
            <input type="email" placeholder="Username" required></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input type="email" placeholder="Email" required></input>
          </div>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input type="password" placeholder="Password" required></input>
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
