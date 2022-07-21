import { FIREBASE_ERRORS } from '../const';

export function isRenamedFirebaseAuthError(
  error: string,
): error is keyof typeof FIREBASE_ERRORS {
  return error in FIREBASE_ERRORS === true;
}
