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

export const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormValues({ ...formValues, confirmPassword: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordValidation = () => {
    setIsPasswordValid(!isPasswordValid);
  };

  return (
    <div css={styles.formContainer}>
      <form css={styles.form}>
        <h1>Sign up</h1>
        <GoogleButton buttonText="Sign up with Google" />
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
          onChange={handlePasswordValidation}
        />
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Confirm Password</label>
          <input
            css={styles.input}
            type={showPassword ? 'text' : 'password'}
            onChange={handleConfirmPasswordChange}
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
        <button css={styles.formButton}>Sign up</button>
        <div css={styles.redirectContainer}>
          <hr />
          <p>Don't have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};
