import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPasswordFormStyle.css";

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

  

  return (
    <div className="wrapperForgot">
      <div className="form-box login">
        <h2>Reset password</h2>
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

          <button type="submit" className="set-btn" disabled={loading}>
            {loading ? "Setting..." : "Set New Password"}
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

export default ResetPasswordForm;
