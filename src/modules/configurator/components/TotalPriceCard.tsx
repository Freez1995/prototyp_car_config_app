/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/TotalPriceCard.styles';
import totalPriceIcon from 'assets/configurator/totalPriceIcon.svg';
import { configuratorSelectors } from '../state';
import { useRecoilValue } from 'recoil';

interface Props {
  direction: 'row' | 'column';
}

export const TotalPriceCard: React.FC<Props> = ({ direction }) => {
  const totalPrice = useRecoilValue(configuratorSelectors.carTotalPrice);
  return (
    <div
      css={direction === 'row' ? styles.containerRow : styles.containerColumn}
    >
      <figure css={styles.priceFigure}>
        <figcaption css={styles.priceFigureText}>TOTAL</figcaption>
        <img src={totalPriceIcon} />
      </figure>
      <p css={styles.priceText}>
        {totalPrice.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{' '}
        €
      </p>
    </div>
  );
};
