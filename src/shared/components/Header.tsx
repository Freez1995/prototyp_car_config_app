/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Header.styles';
import logo from 'assets/header/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { DropdownMenu } from './DropdownMenu';
import { useFirebaseAuth } from 'modules/auth';

export const Header: React.FC = () => {
  const { handleSignOut } = useFirebaseAuth();
  const location = useLocation();

  return (
    <header css={styles.header}>
      <img src={logo} />
      <nav css={styles.navbar}>
        <Link
          css={
            location.pathname === '/'
              ? styles.configureCarLink
              : styles.configureCarLinkHidden
          }
          to="/select-car"
        >
          Configure a car
        </Link>
        <DropdownMenu type={'headerDropdown'}>
          <Link css={styles.dropdownItemLink} to="/">
            My saved configurations
          </Link>
          <button css={styles.dropdownItemButton} onClick={handleSignOut}>
            Logout
          </button>
        </DropdownMenu>
      </nav>
    </header>
  );
};
