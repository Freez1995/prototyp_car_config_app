/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Footer.styles';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';

export const Footer: React.FC = () => {
  const selectedCar = useRecoilValue(configuratorAtoms.selectedCar);
  return (
    <footer css={styles.footer}>
      <div css={styles.footerCarDetails}>
        <p css={styles.footerCarYear}>{selectedCar.carYear}</p>
        <p css={styles.footerCarModel}>{selectedCar.carModel}</p>
      </div>
      <div css={styles.saveConfigContainer}>
        <TotalPriceCard direction="row" />
        <button css={styles.footerButton}>Save your configuration</button>
      </div>
    </footer>
  );
};
