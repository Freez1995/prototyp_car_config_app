/** @jsxImportSource @emotion/react */
import React from 'react';
import { FieldError } from 'react-hook-form';
import { errorForm, hideErrorForm } from '../styles';
import errorIcon from 'assets/auth/errorIcon.svg';

interface ErrorFormProps {
  error: FieldError | undefined;
}

export const ErrorForm: React.FC<ErrorFormProps> = ({ error }) => {
  return (
    <ul css={error ? errorForm : hideErrorForm}>
      {error?.types &&
        Object.values(error?.types).map((item, index) => (
          <li key={index}>
            <img src={errorIcon} />
            <p> {item}</p>
          </li>
        ))}
    </ul>
  );
};
