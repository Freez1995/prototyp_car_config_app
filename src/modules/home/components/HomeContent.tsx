/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import * as styles from '../styles/HomeContent.styles';
import { Link, useNavigate } from 'react-router-dom';
import emptyStateCar from 'assets/home/emptyStateCar.svg';
import {
  useCarColors,
  useCarConfiguration,
  useCarExterior,
  useCarInteriors,
  useCarWheels,
} from 'modules/firebase';
import { SavedConfigurationCard } from './SavedConfigurationCard';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from 'modules/configurator';
import { UpdateCarConfiguration } from 'types';

export const HomeContent: React.FC = () => {
  const setSelectedCar = useSetRecoilState(configuratorAtoms.selectedCar);
  const setSelectedColor = useSetRecoilState(configuratorAtoms.selectedColor);
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setSelectedInterior = useSetRecoilState(
    configuratorAtoms.selectedInterior,
  );
  const setCurrentDocId = useSetRecoilState(
    configuratorAtoms.currentDocumentId,
  );
  const { savedConfigurations, getSavedConfigurations } = useCarConfiguration();
  const { getCarExteriors } = useCarExterior();
  const { getCarColors } = useCarColors();
  const { getCarWheels } = useCarWheels();
  const { getCarInteriors } = useCarInteriors();
  const navigate = useNavigate();

  function handleUpdateConfiguration({
    car,
    color,
    wheels,
    interior,
    documentId,
  }: UpdateCarConfiguration) {
    setSelectedCar(car);
    getCarExteriors(car.carId);
    getCarColors(car.carId);
    getCarWheels(car.carId);
    getCarInteriors(car.carId);
    setSelectedColor(color);
    setSelectedWheels(wheels);
    setSelectedInterior(interior);
    if (documentId) {
      setCurrentDocId(documentId);
    }
    navigate('/configurator-summary');
  }

  useEffect(() => {
    getSavedConfigurations();
  }, []);

  return (
    <article css={styles.contentWrapper}>
      <section css={styles.headingContainer}>
        <h1 css={styles.headingText}>View saved configurations</h1>
        <Link css={styles.headingLink} to="/select-car">
          Configure a car
        </Link>
      </section>
      {!savedConfigurations.length ? (
        <section css={styles.emptyStateContainer}>
          <img src={emptyStateCar} />
          <p css={styles.text}>
            You haven't configured any cars yet. You may
            <br /> choose to
            <Link css={styles.textLink} to="/select-car">
              {' '}
              configure some now.
            </Link>
          </p>
        </section>
      ) : (
        <div css={styles.savedConfigurationCards}>
          {savedConfigurations.map((configuration) => (
            <SavedConfigurationCard
              key={configuration.documentId}
              data={configuration}
              updateConfiguration={handleUpdateConfiguration}
            />
          ))}
        </div>
      )}
    </article>
  );
};
