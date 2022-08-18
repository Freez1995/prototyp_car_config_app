/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Footer.styles';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';
import { useCarConfiguration } from 'modules/firebase';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const selectedCar = useRecoilValue(configuratorAtoms.selectedCar);
  const currentDocumentId = useRecoilValue(configuratorAtoms.currentDocumentId);
  const resetCurrentDocumentId = useResetRecoilState(
    configuratorAtoms.currentDocumentId,
  );
  const { saveCarConfiguration, updateCarConfiguration } =
    useCarConfiguration();
  const navigate = useNavigate();

  function handleCarConfiguration() {
    if (!currentDocumentId) {
      saveCarConfiguration();
      return;
    }
    updateCarConfiguration(currentDocumentId);
    resetCurrentDocumentId();
  }

  function onSaveConfiguration() {
    handleCarConfiguration();
    navigate('/', { replace: true });
  }

  return (
    <footer css={styles.footer}>
      <div css={styles.footerCarDetails}>
        <p css={styles.footerCarYear}>{selectedCar.carYear}</p>
        <p css={styles.footerCarModel}>{selectedCar.carModel}</p>
      </div>
      <div css={styles.saveConfigContainer}>
        <TotalPriceCard direction="row" />
        <button css={styles.footerButton} onClick={onSaveConfiguration}>
          Save your configuration
        </button>
      </div>
    </footer>
  );
};
