/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/DetailsCard.styles';

interface Props {
  image: string;
  detailsText: string;
  detailsPrice: number;
}

export const DetailsCard: React.FC<Props> = ({
  image,
  detailsText,
  detailsPrice,
}) => {
  return (
    <div css={styles.detailsCard}>
      <figure css={styles.detailsFigure}>
        <img css={styles.detailsFigureImage} src={image} />
        <figcaption css={styles.detailsFigureText}>{detailsText}</figcaption>
      </figure>
      <p css={styles.detailsPriceText}>
        {detailsPrice.toLocaleString('en-US')} €
      </p>
    </div>
  );
};
