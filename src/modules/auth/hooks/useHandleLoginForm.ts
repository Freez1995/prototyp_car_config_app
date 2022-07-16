import { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface LoginFormValues {
  email: string;
  password: string;
}

export function useHandleLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    criteriaMode: 'all',
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function onSubmit(data: LoginFormValues) {
    alert(JSON.stringify(data));
  }

  return {
    register,
    showPassword,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    errors,
  };
}
