/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/ConfigurationViewForm.styles';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (isStateSet) {
      setSelectedColor(initialColor);
      setSelectedWheels(initialWheels);
      setSelectedInterior(initialInterior);
      setIsLoaded(true);
    }
  }, [initialColor, initialWheels, initialInterior]);

  function handleOnDelete() {
    navigate('/select-car', { replace: true });
  }

  return isLoaded ? (
    <div>
      <Navbar>
        <Link
          css={styles.editConfiguration}
          to="/configurator-exterior"
          replace={true}
        >
          Edit configuration
        </Link>
        <button css={styles.deleteConfiguration} onClick={handleOnDelete}>
          Delete
        </button>
      </Navbar>
      <section css={styles.contentWrapper}>
        <Carousel type="carDetailsCarousel">
          <CarouselImageSlider imagesType="exterior" />
        </Carousel>
        <ConfigurationDetailsForm type="configurationView" />
      </section>
    </div>
  ) : null;
};
