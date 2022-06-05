import "./Login_Register.css";
import googleIcon from "../../assets/icons/google_logo_icon.svg";
import { ShowPassword, RegisterForm } from "./FormCheck";
import { useState } from "react";
import { PasswordCheckComponent, EmailCheckRegex } from "./FormCheck";

export const Register = () => {
  const [formValues, setFormValues] = useState<RegisterForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  // Passing into Child Compnent "PasswordCheckComponent" to update passwordValidation state
  const handlePasswordValidationChange = (isValid: boolean) => {
    setPasswordValidation(isValid);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="auth-background">
      <div className="auth-form">
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
            required={true}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          ></input>
          <label>
            <b>Password</b>
          </label>
          <input
            type={ShowPassword(passwordCheckbox)}
            className="input-box"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          ></input>
          <PasswordCheckComponent
            value={formValues.password}
            onValidationChange={handlePasswordValidationChange}
            valueAgain={formValues.confirmPassword}
          />
          <label>
            <b>Confirm Password</b>
          </label>
          <input
            type={ShowPassword(passwordCheckbox)}
            className="input-box"
            placeholder="Confirm your password"
            onChange={(e) =>
              setFormValues({ ...formValues, confirmPassword: e.target.value })
            }
          ></input>
          <label htmlFor="checkbox-showPassword" className="checkbox">
            <input
              type="checkbox"
              id="checkbox-showPassword"
              onChange={(e) => setPasswordCheckbox(e.target.checked)}
            />
            Show password
          </label>
          <button
            type="submit"
            className="signin-btn"
            disabled={!passwordValidation || !EmailCheckRegex(formValues.email)}
          >
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
