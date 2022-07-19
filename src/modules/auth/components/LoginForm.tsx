/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GoogleButton } from './GoogleButton';
import { useFirebaseAuth } from '../hooks';
import { FORM_ERRORS } from '../const';
import { FormErrors } from './FormErrors';

interface LoginFormValues {
  email: string;
  password: string;
  isSessionPersistenceEnabled: boolean;
  showPassword: boolean;
}
export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      isSessionPersistenceEnabled: false,
      showPassword: false,
    },
    criteriaMode: 'all',
  });
  const showPasswordState = watch('showPassword');
  const isSessionPersistenceEnabled = watch('isSessionPersistenceEnabled');
  const { handleSignIn, isLoading } = useFirebaseAuth();

  function onSubmit({
    email,
    password,
    isSessionPersistenceEnabled,
  }: LoginFormValues) {
    handleSignIn({ email, password, isSessionPersistenceEnabled });
  }

  return (
    <div css={styles.formContainer}>
      <form css={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        <GoogleButton
          buttonText="Sign in with Google"
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
            css={errors.email ? styles.inputInvalid : styles.inputValid}
            id="password"
            type={showPasswordState ? 'text' : 'password'}
            {...register('password', {
              required: FORM_ERRORS.fieldRequired,
            })}
          />
          <FormErrors error={errors.password} />
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
          Sign in
        </button>
        <div css={styles.redirectContainer}>
          <Link to="/forgot-password">Forgot Password?</Link>
          <hr />
          <p>Don't have an account?</p>
          <Link to="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
};
