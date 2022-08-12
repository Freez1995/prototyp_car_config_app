/** @jsxImportSource @emotion/react */
import React from 'react';
import { SerializedStyles } from '@emotion/react';
import * as styles from '../styles/Navbar.styles';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { useNavigate } from 'react-router-dom';
import leftArrow from 'assets/configurator/arrowLeft.svg';

interface Props {
  children: React.ReactNode;
  extraStyles?: SerializedStyles;
}

export const Navbar: React.FC<Props> = ({ children, extraStyles }) => {
  const navigate = useNavigate();
  const selectedCar = useRecoilValue(configuratorAtoms.selectedCar);

  function handleNavigateBack() {
    navigate('/', { replace: true });
  }

  return (
    <nav css={styles.navbar}>
      <button css={styles.backButton} onClick={handleNavigateBack}>
        <img src={leftArrow} />
        <p css={styles.yearText}>{selectedCar.carYear}</p>
        <p css={styles.modelText}>{selectedCar.carModel.toUpperCase()}</p>
      </button>
      <div css={extraStyles}>{children}</div>
    </nav>
  );
};
