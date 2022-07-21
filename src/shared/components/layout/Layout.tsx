import { authAtoms } from 'modules';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Header } from '../header';

export const Layout: React.FC = () => {
  const user = useRecoilValue(authAtoms.userAuthState);

  return user ? (
    <main>
      <Header />
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
