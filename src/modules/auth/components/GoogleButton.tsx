/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from 'modules/auth/styles/GoogleButton.styles';
import googleIcon from 'assets/auth/googleIcon.svg';

interface Props {
  buttonText: string;
}

export const GoogleButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <button css={styles.googleButton}>
      <img css={styles.googleButtonIcon} src={googleIcon} alt="Google icon" />
      <p>{buttonText}</p>
    </button>
  );
};
