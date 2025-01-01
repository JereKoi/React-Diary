import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./ResetPasswordForm.css";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/reset-password/${token}`, {
        newPassword: formData.newPassword,
      });
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password should be at least 8 characters long";
    }
    // Add more complex password validation
    return null;
  };

  const setNewPassword = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/reset-password`,
        formData
      );
      console.log(response.data);
      navigate("/LoginScreen");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      console.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapperForgot">
      <div className="form-box reset">
        <h2>Forgot Password</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={setNewPassword}>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={formData.newPassword}
              onChange={handleChange}
              required
              aria-label="New Password"
            />
          </div>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              aria-label="Confirm Password"
            />
          </div>

          <button type="submit" className="set-btn" disabled={loading}>
            {loading ? "Setting..." : "Set New Password"}
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <button
                className="login-link"
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
