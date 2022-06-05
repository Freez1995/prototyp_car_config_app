import "./Login_Register.css";
import googleIcon from "../../assets/icons/google_logo_icon.svg";
import { LoginForm, ErrorForm } from "../../types";
import { useState } from "react";

export const Login = () => {
  const initialValues: LoginForm = { email: "", password: "" };
  const [passwordCheckbox, setPasswordCheckbox] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<ErrorForm>({
    email: "",
    password: "",
  });

  let passwordType: string = "password";
  if (passwordCheckbox === true) {
    passwordType = "text";
  } else {
    passwordType = "password";
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values: LoginForm): ErrorForm => {
    const errors = {
      email: "",
      password: "",
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
    }
    return errors;
  };

  return (
    <div className="auth-background">
      <div className="auth-form">
        <form onSubmit={handleSubmit} noValidate>
          <h1>Sign in</h1>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="input-box"
            placeholder="Enter your email"
            id="email"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          ></input>
          <div className="error-text">
            <p>{formErrors.email}</p>
          </div>
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type={passwordType}
            className="input-box"
            placeholder="Enter your password"
            id="password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          ></input>
          <div className="error-text">
            <p>{formErrors.password}</p>
          </div>
          <label htmlFor="checkbox-showPassword" className="checkbox">
            <input
              type="checkbox"
              id="checkbox-showPassword"
              onChange={(e) => setPasswordCheckbox(e.target.checked)}
            />
            Show password
          </label>
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
