import "./Login_Register.css";
import googleIcon from "../../assets/icons/google_logo_icon.svg";
import { useState } from "react";
import { LoginForm, ShowPassword } from "./FormCheck";

export const Login = () => {
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [formValues, setFormValues] = useState<LoginForm>(Object);
  const pattern =
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="auth-background">
      <div className="auth-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
            id="email"
            required={true}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          ></input>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type={ShowPassword(passwordCheckbox)}
            className="input-box"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            required={true}
            autoComplete={"off"}
          ></input>
          <div className="password-row">
            <div>
              <label htmlFor="checkbox-showPassword" className="checkbox">
                <input
                  type="checkbox"
                  id="checkbox-showPassword"
                  onChange={(e) => setPasswordCheckbox(e.target.checked)}
                />
                Show password
              </label>
            </div>
            <a href="#">Forgot password?</a>
          </div>
          <label htmlFor="checkbox-rememberMe" className="checkbox">
            <input type="checkbox" id="checkbox-rememberMe" />
            Remember me
          </label>
          <button type="submit" className="signin-btn">
            Sign in
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
            <p className="google-btn-text">Sign in with Google</p>
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};
