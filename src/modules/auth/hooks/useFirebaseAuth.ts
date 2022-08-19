import { useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from 'firebaseConfig';
import { FIREBASE_ERRORS, FIREBASE_PASSWORD_RESET_ERRORS } from '../const';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { authAtoms } from '../state';
import { toast } from 'react-toastify';
import {
  isFirebaseError,
  isRenamedFirebaseAuthError,
  isRenamedFirebasePasswordResetError,
} from '../typeguards';

interface FirebaseAuthValues {
  email: string;
  password: string;
  isSessionPersistenceEnabled: boolean;
}
export function useFirebaseAuth() {
  const setUserAuthState = useSetRecoilState(authAtoms.userAuthState);
  const resetUserAuthState = useResetRecoilState(authAtoms.userAuthState);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  function handleSetPersistence(isSessionPersistenceEnabled: boolean) {
    !isSessionPersistenceEnabled &&
      setPersistence(auth, browserSessionPersistence);
  }

  function handleError(error: unknown) {
    if (isFirebaseError(error) && isRenamedFirebaseAuthError(error.message)) {
      toast.error(FIREBASE_ERRORS[error.message]);
      return;
    }
    toast.error('Something went wrong, please try again.');
  }

  function handleSignIn({
    email,
    password,
    isSessionPersistenceEnabled,
  }: FirebaseAuthValues) {
    setIsLoading(true);
    handleSetPersistence(isSessionPersistenceEnabled);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => setIsLoading(false))
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
      });
  }

  function handleSignUp({
    email,
    password,
    isSessionPersistenceEnabled,
  }: FirebaseAuthValues) {
    setIsLoading(true);
    handleSetPersistence(isSessionPersistenceEnabled);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => setIsLoading(false))
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
      });
  }

  function handleGoogleAuthentication(isSessionPersistenceEnabled: boolean) {
    setIsLoading(true);
    handleSetPersistence(isSessionPersistenceEnabled);
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider)
      .then(() => setIsLoading(false))
      .catch((error) => {
        setIsLoading(false);
        handleError(error);
      });
  }

  function handleSignOut() {
    signOut(auth).catch(() => {
      toast.error('Something went wrong, please try again.');
    });
  }

  function handlePasswordReset(email: string) {
    setIsLoading(true);
    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
      handleCodeInApp: false,
    };
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        setIsLoading(false);
        toast.success(
          'Email with a link to reset password has been sent to your email address.',
        );
      })
      .catch((error) => {
        setIsLoading(false);
        if (
          isFirebaseError(error) &&
          isRenamedFirebasePasswordResetError(error.message)
        ) {
          toast.error(FIREBASE_PASSWORD_RESET_ERRORS[error.message]);
          return;
        }
        toast.error('Something went wrong, please try again.');
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUserAuthState(currentUser.uid) : resetUserAuthState();
      setIsUserLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isLoading,
    isUserLoading,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleGoogleAuthentication,
    handlePasswordReset,
  };
}
