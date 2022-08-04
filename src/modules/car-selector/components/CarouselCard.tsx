/** @jsxImportSource @emotion/react */
import React from 'react';
import { useCarColors, useCarInteriors, useCarWheels } from 'modules/firebase';
import * as styles from '../styles/CarouselCard.styles';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';
import { useNavigate } from 'react-router-dom';

interface Props {
  carId: string;
  carFrontImg: string;
  carYear: number;
  carModel: string;
  carPrice: number;
}

export const CarouselCard: React.FC<Props> = ({
  carId,
  carFrontImg,
  carYear,
  carModel,
  carPrice,
}) => {
  const setSelectedCar = useSetRecoilState(configuratorAtoms.selectedCar);
  const { getCarColors } = useCarColors();
  const { getCarWheels } = useCarWheels();
  const { getCarInteriors } = useCarInteriors();
  const navigate = useNavigate();

  function handleOnClick() {
    getCarColors(carId);
    getCarWheels(carId);
    getCarInteriors(carId);
    setSelectedCar({
      carId: carId,
      carModel: carModel,
      carYear: carYear,
      carFrontImg: carFrontImg,
      carPrice: carPrice,
    });
    navigate('/configurator-view', { replace: true });
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
