/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Form.styles';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useFirebaseAuth } from '../hooks';
import { FormErrors } from './FormErrors';
import { FORM_ERRORS } from '../const';
import backArrowIcon from 'assets/auth/backArrowIcon.svg';

interface ForgotPasswordFormValues {
  email: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    criteriaMode: 'all',
  });
  const { handlePasswordReset, isLoading } = useFirebaseAuth();

  function onSubmit({ email }: ForgotPasswordFormValues) {
    handlePasswordReset(email);
  }

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
        <button css={styles.formButton} type="submit" disabled={isLoading}>
          Send Instructions
        </button>
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
