import { useForm } from 'react-hook-form';
import { FORM_ERRORS } from '../const';
import { useFirebaseAuth } from './useFirebaseAuth';

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  authPersistence: boolean;
  showPassword: boolean;
}
export function useHandleRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      authPersistence: false,
      showPassword: false,
    },
    criteriaMode: 'all',
  });
  const passwordValue = watch('password');
  const showPasswordState = watch('showPassword');
  const authPersistence = watch('authPersistence');
  const { handleSignUp } = useFirebaseAuth();

  function validatePwdLetters(value: string) {
    return /((?=.*[a-z])(?=.*[A-Z]))/.test(value) || FORM_ERRORS.pwdLetterError;
  }

  function validatePwdNumber(value: string) {
    return /(?=.*[0-9])/.test(value) || FORM_ERRORS.pwdNumberError;
  }

  function validatePwdLenght(value: string) {
    return value.length > 6 || FORM_ERRORS.pwdLengthError;
  }

  function validateMatchPasswords(value: string) {
    return value === passwordValue || FORM_ERRORS.matchPasswordsError;
  }

  function onSubmit({ email, password, authPersistence }: RegisterFormValues) {
    handleSignUp({ email, password, authPersistence });
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPasswordState,
    authPersistence,
    validatePwdLetters,
    validatePwdNumber,
    validatePwdLenght,
    validateMatchPasswords,
  };
}
