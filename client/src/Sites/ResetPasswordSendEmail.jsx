import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPasswordFormStyle.css";

const ResetPasswordForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: ""
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
        <form onSubmit={setNewEmail}>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.newEmail}
              onChange={handleChange}
              required
              aria-label="Email"
            />
          </div>

          <button type="submit" className="set-btn" disabled={loading}>
            {loading ? "Sending..." : ""}
          </button>
          <div className="login">
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
