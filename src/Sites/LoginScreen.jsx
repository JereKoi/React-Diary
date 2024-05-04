import React, { useState } from "react";
import "./styles.css";

const LoginScreen = () => {
  const [isActive, setIsActive] = useState(false); // false means not active, true means active

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
                <a href="#" className="forgot-link">
                  Forgot password?
                </a>
              </p>
            </div>
          </div>

          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => setIsActive(!isActive)}
                className="register-link"
              >
                Register
              </a>
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
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                onClick={() => setIsActive(!isActive)}
                className="login-link"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
