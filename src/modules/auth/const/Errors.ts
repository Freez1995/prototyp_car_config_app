export const FORM_ERRORS = {
  fieldRequired: 'This field is required.',
  emailFormatError: 'Entered value does not match email format.',
  pwdLetterError: 'Password must contain a capital and lowercase letter.',
  pwdNumberError: 'Password must contain at least one number.',
  pwdLengthError: 'Password must contain at least six characters.',
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
};

export const FIREBASE_PWD_RESET_ERRORS = {
  'Firebase: Error (auth/user-not-found).':
    'Email account that you tried to reach does not exist.',
  'Firebase: Error (auth/network-request-failed).':
    'Connection failed, please check your connection and try again.',
};
