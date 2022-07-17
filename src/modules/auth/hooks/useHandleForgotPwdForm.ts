import { useForm } from 'react-hook-form';
import { useFirebaseAuth } from './useFirebaseAuth';

interface ForgotPwdFormValues {
  email: string;
}
export function useHandleForgotPwdForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPwdFormValues>({
    defaultValues: {
      email: '',
    },
    criteriaMode: 'all',
  });
  const { handlePasswordReset } = useFirebaseAuth();

  function onSubmit({ email }: ForgotPwdFormValues) {
    handlePasswordReset(email);
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}
