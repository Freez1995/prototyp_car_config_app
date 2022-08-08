/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Layout.styles';
import { authAtoms } from 'modules/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Header } from './Header';

export const Layout: React.FC = () => {
  const user = useRecoilValue(authAtoms.userAuthState);

  return user ? (
    <main css={styles.layout}>
      <Header />
      <Outlet />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};
