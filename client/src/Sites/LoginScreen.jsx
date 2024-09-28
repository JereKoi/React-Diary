import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import "./LoginScreenStyle.css";

const LoginScreen = () => {
  const [isActive, setIsActive] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    let isMounted = true;

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const validateLoginForm = (formData) => {
    return formData.email && formData.password;
  };

  const validateRegisterForm = (formData) => {
    return formData.username && formData.email && formData.password;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setLoginError(null);

    if (!validateLoginForm(loginFormData)) {
      setLoginError("Please fill in all required fields.");
      return;
    }

    setLoadingLogin(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/login`,
        loginFormData,
        { withCredentials: true } // This ensures cookies are sent with the request
      );

      if (response.status === 200) {
        navigate("/DashboardPage"); // Navigate to a protected route
      } else {
        setLoginError(response.data.message);
      }
    } catch (error) {
      setLoginError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoadingLogin(false);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    setRegisterError(null);

    if (!validateRegisterForm(registerFormData)) {
      setRegisterError("Please fill in all required fields.");
      return;
    }

    setLoadingRegister(true);
    try {
      const response = await axios.post(
        `${config.backendUrl}/user/signup`,
        registerFormData
      );

      if (response.data.status === "SUCCESS") {
        navigate("/LoginScreen");
      } else {
        setRegisterError(response.data.message);
      }
    } catch (error) {
      setRegisterError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoadingRegister(false);
    }
  };

  return (
    <div className={`wrapper ${isActive ? "active" : ""}`}>
      <div className="form-box login">
        <h2>Login</h2>
        {loginError && <div className="error-message">{loginError}</div>}
        <form onSubmit={loginUser}>
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
              aria-label="Email"
            />
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
              aria-label="Password"
            />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <div className="forgot">
              <button
                className="forgot-link"
                type="button"
                onClick={() => navigate("/ResetPasswordForm")}
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button type="submit" className="login-btn" disabled={loadingLogin}>
            {loadingLogin ? "Logging in..." : "Login"}
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
        {registerError && <div className="error-message">{registerError}</div>}
        <form onSubmit={registerUser}>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-user"></i>
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={registerFormData.username}
              onChange={handleRegisterChange}
              required
              aria-label="Username"
            />
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
              aria-label="Email"
            />
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
              aria-label="Password"
            />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button
            type="submit"
            className="register-btn"
            disabled={loadingRegister}
          >
            {loadingRegister ? "Registering..." : "Register"}
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
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