/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { useHandleRegisterForm } from '../hooks';
import { ErrorForm } from './ErrorForm';
import { FORM_ERRORS } from '../const';

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    handleShowPassword,
    validatePwdLetters,
    validatePwdNumber,
    validatePwdLenght,
    validateMatchPasswords,
  } = useHandleRegisterForm();

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
        <GoogleButton buttonText="Sign up with Google" />
        <hr />
        <div css={styles.inputContainer}>
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
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Password</label>
          <input
            css={errors.password ? styles.inputInvalid : styles.inputValid}
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: FORM_ERRORS.fieldRequired,
              validate: {
                pwdLettersCheck: (v) => validatePwdLetters(v),
                pwdNumberCheck: (v) => validatePwdNumber(v),
                pwdLengthCheck: (v) => validatePwdLenght(v),
              },
            })}
          />
          <ErrorForm error={errors.password} />
        </div>
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel}>Confirm Password</label>
          <input
            css={styles.input}
            type={showPassword ? 'text' : 'password'}
            {...register('confirmPassword', {
              required: 'This field is required.',
              validate: {
                matchPasswords: (v) => validateMatchPasswords(v),
              },
            })}
          />
          <ErrorForm error={errors.confirmPassword} />
        </div>
        <div css={styles.checkboxContainer}>
          <input type="checkbox" onChange={handleShowPassword} />
          <label>Show password</label>
        </div>
        <div css={styles.checkboxContainer}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <button css={styles.formButton} type="submit">
          Sign up
        </button>
        <div css={styles.redirectContainer}>
          <hr />
          <p>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};
