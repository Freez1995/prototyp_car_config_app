/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../google-button';
import * as styles from '../../styles/Form.styles';

interface FormValues {
  email: string;
  password: string;
}

const initialFormValues: FormValues = {
  email: '',
  password: '',
};

export const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form css={styles.formContainer}>
      <h1>Sign in</h1>
      <GoogleButton buttonText="Sign in with Google" />
      <hr />
      <div css={styles.inputContainer}>
        <label css={styles.inputLabel}>Email</label>
        <input
          css={styles.input}
          type="email"
          onChange={(e) => {
            setFormValues({ ...formValues, email: e.target.value });
          }}
        />
      </div>
      <div css={styles.inputContainer}>
        <label css={styles.inputLabel}>Password</label>
        <input
          css={styles.input}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
        />
      </div>
      <div css={styles.checkboxContainer}>
        <input
          type="checkbox"
          onChange={() => {
            setShowPassword(!showPassword);
          }}
        />
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
  );
};
