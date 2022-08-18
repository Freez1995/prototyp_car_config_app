/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/ConfiguratorSummaryForm.styles';
import { Carousel } from 'shared/components';
import { CarouselImageSlider } from './CarouselImageSlider';
import { ConfigurationDetailsForm } from './ConfigurationDetailsForm';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { Footer } from './Footer';

export const ConfiguratorSummaryForm: React.FC = () => {
  return (
    <div>
      <ConfiguratorNavbar />
      <div css={styles.summaryWrapper}>
        <div css={styles.summaryHeadingContainer}>
          <h1 css={styles.summaryHeadingText}>Almost done!</h1>
          <p css={styles.summarySubheadingText}>
            Review your configuration and save your car.
          </p>
        </div>
        <Carousel type="carDetailsCarousel">
          <CarouselImageSlider imagesType="exterior" />
        </Carousel>
        <ConfigurationDetailsForm type="configuratorSummary" />
      </div>
      <Footer />
    </div>
  );
};
