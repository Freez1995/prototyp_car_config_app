/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/ConfigurationViewForm.styles';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Carousel } from 'shared/components';
import { CarouselImageSlider } from './CarouselImageSlider';
import { ConfigurationDetailsForm } from './ConfigurationDetailsForm';
import { useCarInitialState } from '../hooks';

export const ConfigurationViewForm: React.FC = () => {
  const { isLoading, resetSelectedCarState } = useCarInitialState();
  const navigate = useNavigate();

  function handleOnDelete() {
    resetSelectedCarState();
    navigate('/select-car', { replace: true });
  }

  return !isLoading ? (
    <div>
      <Navbar>
        <Link css={styles.editConfiguration} to="/configurator-exterior">
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
