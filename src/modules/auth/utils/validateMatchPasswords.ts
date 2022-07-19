import { FORM_ERRORS } from '../const';

export function validateMatchPasswords(
  confirmPassword: string,
  password: string,
) {
  return confirmPassword === password || FORM_ERRORS.matchPasswordsError;
}
