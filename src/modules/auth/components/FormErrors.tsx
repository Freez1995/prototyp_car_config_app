/** @jsxImportSource @emotion/react */
import React from 'react';
import { FieldError } from 'react-hook-form';
import * as styles from '../styles/Form.styles';
import errorIcon from 'assets/auth/errorIcon.svg';

interface Props {
  error?: FieldError;
}

export const FormErrors: React.FC<Props> = ({ error }) => {
  if (!error) return null;

  return (
    <ul css={styles.errorForm}>
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
