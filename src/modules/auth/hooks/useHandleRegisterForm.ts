import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FORM_ERRORS } from '../const';

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
export function useHandleRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    criteriaMode: 'all',
  });
  const [showPassword, setShowPassword] = useState(false);
  const passwordValue = watch('password');

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

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

  function onSubmit(data: RegisterFormValues) {
    alert(JSON.stringify(data));
  }

  useEffect(() => {
    passwordValue !== '' && trigger('confirmPassword');
  }, [passwordValue, trigger]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    handleShowPassword,
    validatePwdLetters,
    validatePwdNumber,
    validatePwdLenght,
    validateMatchPasswords,
  };
}
