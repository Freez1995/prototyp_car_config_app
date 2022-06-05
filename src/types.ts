export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ErrorForm {
  email: string;
  password: string;
  confirmPassword?: string;
}
