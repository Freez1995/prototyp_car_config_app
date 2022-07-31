/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/CarouselCard.styles';

interface Props {
  carId: string;
  carFrontImg: string;
  carYear: number;
  carModel: string;
}

export const CarouselCard: React.FC<Props> = ({
  carId,
  carFrontImg,
  carYear,
  carModel,
}) => {
  function handleOnClick() {
    console.log(carId);
  }

  return (
    <div css={styles.card}>
      <img src={carFrontImg} />
      <div css={styles.contentContainer}>
        <p css={styles.carYearText}>{carYear}</p>
        <h1 css={styles.carModelText}>{carModel}</h1>
        <button css={styles.cardButton} onClick={handleOnClick}>
          Configure Now
        </button>
      </div>
    </div>
  );
};
