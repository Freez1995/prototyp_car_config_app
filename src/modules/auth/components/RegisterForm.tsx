/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { GoogleButton } from './GoogleButton';
import { useFirebaseAuth } from '../hooks';
import { FormErrors } from './FormErrors';
import { FORM_ERRORS } from '../const';
import { useForm } from 'react-hook-form';
import {
  validateMatchPasswords,
  validatePasswordLength,
  validatePasswordLetters,
  validatePasswordNumber,
} from '../utils';

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  isSessionPersistenceEnabled: boolean;
  showPassword: boolean;
}
export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      isSessionPersistenceEnabled: false,
      showPassword: false,
    },
    criteriaMode: 'all',
  });
  const passwordValue = watch('password');
  const showPasswordState = watch('showPassword');
  const isSessionPersistenceEnabled = watch('isSessionPersistenceEnabled');
  const { handleSignUp, isLoading } = useFirebaseAuth();

  function onSubmit({
    email,
    password,
    isSessionPersistenceEnabled,
  }: RegisterFormValues) {
    handleSignUp({ email, password, isSessionPersistenceEnabled });
  }

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
        <GoogleButton
          buttonText="Sign up with Google"
          isSessionPersistenceEnabled={isSessionPersistenceEnabled}
        />
        <hr />
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel} htmlFor="email">
            Email
          </label>
          <input
            css={errors.email ? styles.inputInvalid : styles.inputValid}
            id="email"
            {...register('email', {
              required: FORM_ERRORS.fieldRequired,
              pattern: {
                value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                message: FORM_ERRORS.emailFormatError,
              },
            })}
          />
          <FormErrors error={errors.email} />
        </div>
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel} htmlFor="password">
            Password
          </label>
          <input
            css={errors.password ? styles.inputInvalid : styles.inputValid}
            id="password"
            type={showPasswordState ? 'text' : 'password'}
            {...register('password', {
              required: FORM_ERRORS.fieldRequired,
              validate: {
                passwordLettersCheck: (password) =>
                  validatePasswordLetters(password),
                passwordNumberCheck: (password) =>
                  validatePasswordNumber(password),
                passwordLengthCheck: (password) =>
                  validatePasswordLength(password),
              },
            })}
          />
          <FormErrors error={errors.password} />
        </div>
        <div css={styles.inputContainer}>
          <label css={styles.inputLabel} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            css={errors.password ? styles.inputInvalid : styles.inputValid}
            id="confirmPassword"
            type={showPasswordState ? 'text' : 'password'}
            {...register('confirmPassword', {
              required: 'This field is required.',
              validate: {
                matchPasswords: (confirmPassword) =>
                  validateMatchPasswords(confirmPassword, passwordValue),
              },
            })}
          />
          <FormErrors error={errors.confirmPassword} />
        </div>
        <div css={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="showPassword"
            {...register('showPassword')}
          />
          <label htmlFor="showPassword">Show password</label>
        </div>
        <div css={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="rememberMe"
            {...register('isSessionPersistenceEnabled')}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button css={styles.formButton} type="submit" disabled={isLoading}>
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
