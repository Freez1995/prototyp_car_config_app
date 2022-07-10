/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from './GoogleButton.styles';
import googleIcon from '../../../../assets/auth/googleIcon.svg';

export const GoogleButton: React.FC<{ buttonText: string }> = ({
  buttonText,
}) => {
  return (
    <button css={styles.googleButton}>
      <img css={styles.googleButtonIcon} src={googleIcon} alt="Google icon" />
      <p>{buttonText}</p>
    </button>
  );
};
