/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { useHandleForgotPwdForm } from '../hooks';
import { ErrorForm } from './ErrorForm';
import { FORM_ERRORS } from '../const';
import backArrowIcon from 'assets/backArrowIcon.svg';

export const ForgotPassword: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors } = useHandleForgotPwdForm();

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Forgot Password</h1>
        <hr />
        <div css={styles.inputContainer}>
          <p>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </p>
          <hr />
          <label css={styles.inputLabel}>Email</label>
          <input
            css={errors.email ? styles.inputInvalid : styles.inputValid}
            {...register('email', {
              required: FORM_ERRORS.fieldRequired,
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                message: FORM_ERRORS.emailFormatError,
              },
            })}
          />
          <ErrorForm error={errors.email} />
        </div>
        <button css={styles.formButton}>Send Instructions</button>
        <div css={styles.redirectContainer}>
          <Link to="/login">
            <img src={backArrowIcon} />
            Back to Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};
