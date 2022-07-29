import { FirestoreError } from 'firebase/firestore';

export function isFirestoreError(error: unknown): error is FirestoreError {
  return error instanceof FirestoreError === true;
}
