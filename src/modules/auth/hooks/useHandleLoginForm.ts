import { useForm } from 'react-hook-form';
import { useFirebaseAuth } from './useFirebaseAuth';

interface LoginFormValues {
  email: string;
  password: string;
  authPersistence: boolean;
  showPassword: boolean;
}
export function useHandleLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      authPersistence: false,
      showPassword: false,
    },
    criteriaMode: 'all',
  });
  const showPasswordState = watch('showPassword');
  const authPersistence = watch('authPersistence');
  const { handleSignIn } = useFirebaseAuth();

  function onSubmit({ email, password, authPersistence }: LoginFormValues) {
    handleSignIn({ email, password, authPersistence });
  }

  return {
    register,
    showPasswordState,
    handleSubmit,
    onSubmit,
    errors,
    authPersistence,
  };
}
