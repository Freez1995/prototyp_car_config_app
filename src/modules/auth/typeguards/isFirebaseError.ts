import { FirebaseError } from 'firebase/app';

export function isFirebaseError(error: unknown): error is FirebaseError {
  return error instanceof FirebaseError === true;
}
