/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/ConfiguratorNavbar.styles';
import { NavLink } from 'react-router-dom';
import { Navbar } from './Navbar';

interface Props {
  isNavigationHidden?: boolean;
}

export const ConfiguratorNavbar: React.FC<Props> = ({ isNavigationHidden }) => {
  return (
    <Navbar
      extraStyles={
        isNavigationHidden ? styles.linkContainerHidden : styles.linkContainer
      }
    >
      <NavLink to="/configurator-exterior" replace={true}>
        {({ isActive }) => (
          <p css={isActive ? styles.linkActive : styles.linkNumber}>
            01 <span css={styles.linkText}>Exterior</span>
          </p>
        )}
      </NavLink>
      <NavLink to="/configurator-interior" replace={true}>
        {({ isActive }) => (
          <p css={isActive ? styles.linkActive : styles.linkNumber}>
            02 <span css={styles.linkText}>Interior</span>
          </p>
        )}
      </NavLink>
      <NavLink to="/configurator-summary" replace={true}>
        {({ isActive }) => (
          <p css={isActive ? styles.linkActive : styles.linkNumber}>
            03 <span css={styles.linkText}>Summary</span>
          </p>
        )}
      </NavLink>
    </Navbar>
  );
};
