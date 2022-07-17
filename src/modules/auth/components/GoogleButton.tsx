/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from 'modules/auth/styles/GoogleButton.styles';
import googleIcon from 'assets/auth/googleIcon.svg';
import { useFirebaseAuth } from '../hooks';

interface GoogleButtonProps {
  buttonText: string;
  authPersistance: boolean;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({
  buttonText,
  authPersistance,
}) => {
  const { handleGoogleAuthentication } = useFirebaseAuth();

  return (
    <button
      css={styles.googleButton}
      onClick={(e) => handleGoogleAuthentication(e, authPersistance)}
    >
      <img css={styles.googleButtonIcon} src={googleIcon} alt="Google icon" />
      <p>{buttonText}</p>
    </button>
  );
};
