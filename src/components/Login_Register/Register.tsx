import "./Login_Register.css";
import googleIcon from "../../assets/icons/google_logo_icon.svg";
import { useState } from "react";

export const Register = () => {
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  let passwordType: string = "password";
  if (passwordCheckbox === true) {
    passwordType = "text";
  } else {
    passwordType = "password";
  }

  return (
    <div className="auth-background">
      <div className="auth-form">
        <form>
          <h1>Sign up</h1>
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
          ></input>
          <label>
            <b>Password</b>
          </label>
          <input
            type={passwordType}
            className="input-box"
            placeholder="Enter your password"
          ></input>
          <label>
            <b>Confirm Password</b>
          </label>
          <input
            type={passwordType}
            className="input-box"
            placeholder="Confirm your password"
          ></input>
          <label htmlFor="checkbox-showPassword" className="itemLabel">
            <input
              type="checkbox"
              id="checkbox-showPassword"
              onChange={(e) => setPasswordCheckbox(e.target.checked)}
            />
            Show password
          </label>
          <button type="submit" className="signin-btn">
            Sign up
          </button>
          <hr />
          <p className="or">
            <b>OR</b>
          </p>
          <button type="button" className="google-btn">
            <img
              className="google-btn-icon"
              src={googleIcon}
              alt="Google icon"
            />
            <p className="google-btn-text">Sign up with Google</p>
          </button>
          <p>
            Already have an account? <a href="/">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};
