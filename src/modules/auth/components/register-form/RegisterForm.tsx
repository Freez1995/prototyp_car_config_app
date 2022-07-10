/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from '../google-button';
import PasswordChecklist from 'react-password-checklist';
import * as styles from '../../styles/Form.styles';

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialFormValues: FormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};
export const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form css={styles.formContainer}>
      <h1>Sign up</h1>
      <GoogleButton buttonText="Sign up with Google" />
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
      <PasswordChecklist
        css={
          formValues.password
            ? styles.passwordCheckList
            : styles.passwordCheckListHidden
        }
        rules={[
          'minLength',
          'specialChar',
          'number',
          'capital',
          'lowercase',
          'match',
        ]}
        minLength={6}
        value={formValues.password}
        iconSize={15}
        valueAgain={formValues.confirmPassword}
        onChange={() => {
          setIsPasswordValid(!isPasswordValid);
        }}
      />
      <div css={styles.inputContainer}>
        <label css={styles.inputLabel}>Confirm Password</label>
        <input
          css={styles.input}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => {
            setFormValues({ ...formValues, confirmPassword: e.target.value });
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
      <button css={styles.formButton}>Sign up</button>
      <div css={styles.redirectContainer}>
        <hr />
        <p>Don't have an account?</p>
        <Link to="/login">Sign in</Link>
      </div>
    </form>
  );
};
