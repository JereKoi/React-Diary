import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import "./ForgotFormStyle.css";

const ForgotForm = () => {
  const navigate = useNavigate(); // Get the navigate function

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setNewPassword = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      // Passwords don't match
      console.log("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post(
        `${config.backendUrl}/user/reset-password`,
        formData
      );
      console.log(response.data);
      // Handle success response
      navigate("/LoginScreen"); // Redirect to login after resetting password
    } catch (error) {
      console.error(error.response.data);
      // Handle error response
    }
  };

  return (
    <div className="wrapperForgot">
      <div className="form-box login">
        <h2>Forgot Password</h2>
        <form action="#" onSubmit={setNewPassword}>
          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-envelope"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            ></input>
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
            ></input>
          </div>

          <button type="submit" className="set-btn">
            Set new password
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <button
                className="login-link"
                type="button"
                onClick={() => navigate("/LoginScreen")}
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

export default ForgotForm;
