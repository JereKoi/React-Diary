import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Components/Footer";
import "./ResetPasswordSendEmailStyle.css";

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

  const setNewEmail = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/reset-password/${token}`,
        { email: formData.email }
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
    <div className="wrapperReset">
      <div className="form-box reset">
        <h2>Reset password</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={setNewEmail}>
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
              aria-label="Email"
            />
          </div>

          <button type="submit" className="set-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Reset link"}
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
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default ResetPasswordForm;