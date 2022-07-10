import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthProps {
  isAuth: boolean;
}

export const Auth: React.FC<AuthProps> = ({ isAuth }) => {
  return isAuth ? (
    <Navigate to="/" />
  ) : (
    <main>
      <Outlet />
    </main>
  );
};
