import { authAtoms } from 'modules';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const Auth: React.FC = () => {
  const user = useRecoilValue(authAtoms.userAuthState);

  return user ? (
    <Navigate to="/" />
  ) : (
    <main>
      <Outlet />
    </main>
  );
};
