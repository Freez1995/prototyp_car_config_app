import { authAtoms } from 'modules';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const Layout: React.FC = () => {
  const user = useRecoilValue(authAtoms.userAuthState);

  return user ? (
    <main>
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
