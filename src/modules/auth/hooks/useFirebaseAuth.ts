import { useEffect } from 'react';
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
import { FIREBASE_ERRORS, FIREBASE_PWD_RESET_ERRORS } from '../const';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { authAtoms } from '../state';
import { toast } from 'react-toastify';

interface FirebaseAuthValues {
  email: string;
  password: string;
  authPersistence: boolean;
}
export function useFirebaseAuth() {
  const setUserAuthState = useSetRecoilState(authAtoms.userAuthState);
  const resetUserAuthState = useResetRecoilState(authAtoms.userAuthState);

  function handleSignIn({
    email,
    password,
    authPersistence,
  }: FirebaseAuthValues) {
    !authPersistence && setPersistence(auth, browserSessionPersistence);
    signInWithEmailAndPassword(auth, email, password).catch((error: Error) => {
      toast.error(
        FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS],
      );
    });
  }

  function handleSignUp({
    email,
    password,
    authPersistence,
  }: FirebaseAuthValues) {
    !authPersistence && setPersistence(auth, browserSessionPersistence);
    createUserWithEmailAndPassword(auth, email, password).catch(
      (error: Error) => {
        toast.error(
          FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS],
        );
      },
    );
  }

  function handleSignOut() {
    signOut(auth).catch(() => {
      toast.error('Something went wrong, please try again.');
    });
  }

  function handleGoogleAuthentication(
    e: React.MouseEvent<HTMLButtonElement>,
    authPersistence: boolean,
  ) {
    e.preventDefault();
    !authPersistence && setPersistence(auth, browserSessionPersistence);
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider).catch((error: Error) => {
      toast.error(
        FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS],
      );
    });
  }

  function handlePasswordReset(email: string) {
    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
      handleCodeInApp: false,
    };
    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        toast.success(
          'Email with a link to reset password has been sent to your email address.',
        );
      })
      .catch((error: Error) => {
        toast.error(
          FIREBASE_PWD_RESET_ERRORS[
            error.message as keyof typeof FIREBASE_PWD_RESET_ERRORS
          ],
        );
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser ? setUserAuthState(currentUser.uid) : resetUserAuthState();
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    handleSignIn,
    handleSignUp,
    handleSignOut,
    handleGoogleAuthentication,
    handlePasswordReset,
  };
}
