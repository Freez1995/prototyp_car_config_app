import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  auth: boolean;
}

export const Layout: React.FC<Props> = ({ auth }) => {
  return auth ? (
    <main>
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
