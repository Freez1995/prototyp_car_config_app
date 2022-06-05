import "./Login_Register.css";
import googleIcon from "../../assets/icons/google_logo_icon.svg";
import { RegisterForm, ErrorForm } from "../../types";
import { useState } from "react";

export const Register = () => {
  const initialValues: RegisterForm = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ErrorForm>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // Checkbox - show/hide password
  let passwordType: string = "password";
  if (passwordCheckbox === true) {
    passwordType = "text";
  } else {
    passwordType = "password";
  }

  // validate form
  const validate = (values: RegisterForm): ErrorForm => {
    const errors = {
      email: "",
      password: "",
      confirmPassword: "",
    };
    const regex = new RegExp(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters!";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match!";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  return (
    <div className="auth-background">
      <div className="auth-form">
        <form onSubmit={handleSubmit} noValidate>
          <h1>Sign up</h1>
          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          ></input>
          <div className="error-text">
            <p>{formErrors.email}</p>
          </div>
          <label>
            <b>Password</b>
          </label>
          <input
            type={passwordType}
            className="input-box"
            placeholder="Enter your password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          ></input>
          <div className="error-text">
            <p>{formErrors.password}</p>
          </div>
          <label>
            <b>Confirm Password</b>
          </label>
          <input
            type={passwordType}
            className="input-box"
            placeholder="Confirm your password"
            onChange={(e) =>
              setFormValues({ ...formValues, confirmPassword: e.target.value })
            }
          ></input>
          <div className="error-text">
            <p>{formErrors.confirmPassword}</p>
          </div>
          <label htmlFor="checkbox-showPassword" className="checkbox">
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
