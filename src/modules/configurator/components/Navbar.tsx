/** @jsxImportSource @emotion/react */
import React from 'react';
import { SerializedStyles } from '@emotion/react';
import * as styles from '../styles/Navbar.styles';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { Link } from 'react-router-dom';
import leftArrow from 'assets/configurator/arrowLeft.svg';

interface Props {
  children: React.ReactNode;
  extraStyles?: SerializedStyles;
}

export const Navbar: React.FC<Props> = ({ children, extraStyles }) => {
  const selectedCar = useRecoilValue(configuratorAtoms.selectedCar);

  return (
    <nav css={styles.navbar}>
      <Link css={styles.backButton} to="/">
        <img src={leftArrow} />
        <div css={styles.navbarTextContainer}>
          <p css={styles.yearText}>{selectedCar.carYear}</p>
          <p css={styles.modelText}>{selectedCar.carModel.toUpperCase()}</p>
        </div>
      </Link>
      <div css={extraStyles}>{children}</div>
    </nav>
  );
};
