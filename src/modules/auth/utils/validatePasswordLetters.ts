import { FORM_ERRORS } from '../const';

export function validatePasswordLetters(password: string) {
  return (
    /((?=.*[a-z])(?=.*[A-Z]))/.test(password) || FORM_ERRORS.passwordLetterError
  );
}
