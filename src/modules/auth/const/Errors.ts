export const FORM_ERRORS = {
  fieldRequired: 'This field is required.',
  emailFormatError: 'Entered value does not match email format.',
  passwordLetterError: 'Password must contain a capital and lowercase letter.',
  passwordNumberError: 'Password must contain at least one number.',
  passwordLengthError: 'Password must contain at least six characters.',
  matchPasswordsError: 'Passwords must match',
};

export const FIREBASE_ERRORS = {
  'Firebase: Error (auth/email-already-in-use).':
    'A user with that email already exist.',
  'Firebase: Error (auth/user-not-found).': 'Invalid email or password.',
  'Firebase: Error (auth/wrong-password).': 'Invalid email or password.',
  'Firebase: Error (auth/network-request-failed).':
    'Connection failed, please check your connection and try again.',
  'Firebase: Error (auth/popup-closed-by-user).':
    'Sign in with Google has been canceled.',
  'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':
    'Too many attempts, please reset your password or try again later.',
};

export const FIREBASE_PASSWORD_RESET_ERRORS = {
  'Firebase: Error (auth/user-not-found).':
    'Email account that you tried to reach does not exist.',
  'Firebase: Error (auth/network-request-failed).':
    'Connection failed, please check your connection and try again.',
};
