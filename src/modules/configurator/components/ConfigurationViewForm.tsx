/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/ConfigurationViewForm.styles';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Carousel } from 'shared/components';
import { CarouselImageSlider } from './CarouselImageSlider';
import { ConfigurationDetailsForm } from './ConfigurationDetailsForm';
import { useCarInitialState } from '../hooks';
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from '../state';

export const ConfigurationViewForm: React.FC = () => {
  const { isStateSet, initialColor, initialWheels, initialInterior } =
    useCarInitialState();
  const [isLoaded, setIsLoaded] = useState(false);
  const setSelectedColor = useSetRecoilState(configuratorAtoms.selectedColor);
  const setSelectedWheels = useSetRecoilState(configuratorAtoms.selectedWheels);
  const setSelectedInterior = useSetRecoilState(
    configuratorAtoms.selectedInterior,
  );

  useEffect(() => {
    if (!isStateSet) return;
    setSelectedColor(initialColor);
    setSelectedWheels(initialWheels);
    setSelectedInterior(initialInterior);
    setIsLoaded(true);
  }, [initialColor, initialWheels, initialInterior]);

  if (!isLoaded) return null;

  return (
    <div>
      <Navbar>
        <Link
          css={styles.editConfiguration}
          to="/configurator-exterior"
          replace={true}
        >
          Edit configuration
        </Link>
        <Link css={styles.deleteConfiguration} to="/select-car">
          Delete
        </Link>
      </Navbar>
      <section css={styles.contentWrapper}>
        <Carousel type="carDetailsCarousel">
          <CarouselImageSlider imagesType="exterior" />
        </Carousel>
        <ConfigurationDetailsForm type="configurationView" />
      </section>
    </div>
  );
};
