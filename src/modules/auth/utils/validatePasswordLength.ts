import { FORM_ERRORS } from '../const';

export function validatePasswordLength(password: string) {
  return password.length > 6 || FORM_ERRORS.passwordLengthError;
}
