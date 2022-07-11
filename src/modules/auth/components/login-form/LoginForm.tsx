/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../google-button';
import * as styles from '../../styles/Form.styles';

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div css={styles.formContainer}>
      <form css={styles.form}>
        <h1>Sign in</h1>
        <GoogleButton buttonText="Sign in with Google" />
        <hr />
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Email</label>
          <input css={styles.input} type="email" onChange={handleEmailChange} />
        </div>
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Password</label>
          <input
            css={styles.input}
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
          />
        </div>
        <div css={styles.checkboxContainer}>
          <input type="checkbox" onChange={handleShowPassword} />
          <label>Show password</label>
        </div>
        <div css={styles.checkboxContainer}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <button css={styles.formButton}>Sign in</button>
        <div css={styles.redirectContainer}>
          <Link to="#">Forgot Password?</Link>
          <hr />
          <p>Don't have an account?</p>
          <Link to="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
};
