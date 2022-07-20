/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from 'modules/auth/styles/GoogleButton.styles';
import googleIcon from 'assets/auth/googleIcon.svg';
import { useFirebaseAuth } from '../hooks';

interface GoogleButtonProps {
  buttonText: string;
  isSessionPersistenceEnabled: boolean;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({
  buttonText,
  isSessionPersistenceEnabled,
}) => {
  const { handleGoogleAuthentication, isLoading } = useFirebaseAuth();

  function handleOnSubmit() {
    handleGoogleAuthentication(isSessionPersistenceEnabled);
  }

  return (
    <button
      css={styles.googleButton}
      type="button"
      onClick={handleOnSubmit}
      disabled={isLoading}
    >
      <img css={styles.googleButtonIcon} src={googleIcon} alt="Google icon" />
      <p>{buttonText}</p>
    </button>
  );
};
