/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/PriceContainer.styles';
import totalPriceIcon from 'assets/configurator/totalPriceIcon.svg';

interface Props {
  type: 'row' | 'column';
  totalPrice: number;
}

export const PriceContainer: React.FC<Props> = ({ totalPrice, type }) => {
  return (
    <div css={type === 'row' ? styles.containerRow : styles.containerColumn}>
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
