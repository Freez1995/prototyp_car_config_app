import React from 'react';
import { authAtoms, useFirebaseAuth } from 'modules/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const Auth: React.FC = () => {
  const user = useRecoilValue(authAtoms.userAuthState);
  const { isUserLoading } = useFirebaseAuth();

  if (isUserLoading) return null;
  return user ? (
    <Navigate to="/" />
  ) : (
    <main>
      <Outlet />
    </main>
  );
};
