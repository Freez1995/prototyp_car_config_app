/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { useHandleLoginForm } from '../hooks';
import { FORM_ERRORS } from '../const';
import { ErrorForm } from './ErrorForm';

export const LoginForm: React.FC = () => {
  const {
    register,
    showPassword,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    errors,
  } = useHandleLoginForm();

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <GoogleButton buttonText="Sign in with Google" />
        <hr />
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Email</label>
          <input
            css={styles.input}
            type="email"
            {...register('email', {
              required: FORM_ERRORS.fieldRequired,
            })}
          />
          <ErrorForm error={errors.email} />
        </div>
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Password</label>
          <input
            css={styles.input}
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: FORM_ERRORS.fieldRequired,
            })}
          />
          <ErrorForm error={errors.password} />
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
