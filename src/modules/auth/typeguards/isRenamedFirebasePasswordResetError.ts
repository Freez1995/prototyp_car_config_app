import { FIREBASE_PASSWORD_RESET_ERRORS } from '../const';

export function isRenamedFirebasePasswordResetError(
  error: string,
): error is keyof typeof FIREBASE_PASSWORD_RESET_ERRORS {
  return error in FIREBASE_PASSWORD_RESET_ERRORS === true;
}
