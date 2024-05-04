import "./styles.css";

const ForgotForm = () => {
  return (
    <div className="wrapperForgot">
      <div className="form-box login">
        <h2>Forgot Password</h2>
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
            <input
              type="New password"
              placeholder="New password"
              required
            ></input>
          </div>

          <div className="input-box">
            <span className="icon">
              <i className="bx bxs-lock-alt"></i>
            </span>
            <input
              type="Confirm password"
              placeholder="Confirm Password"
              required
            ></input>
          </div>

          <button type="submit" className="btn">
            Set new password
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <a href="#" className="register-link">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotForm;

