import { FORM_ERRORS } from '../const';

export function validatePasswordNumber(password: string) {
  return /(?=.*[0-9])/.test(password) || FORM_ERRORS.passwordNumberError;
}
