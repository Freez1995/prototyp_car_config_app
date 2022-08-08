/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import * as styles from '../styles/SelectorContent.styles';
import { Carousel } from 'shared/components';
import { CarouselCard } from './CarouselCard';
import { useCars } from 'modules/firebase';
import { useCarInitialState } from 'modules/configurator';

export const SelectorContent: React.FC = () => {
  const { cars, isLoaded, getAllCars } = useCars();
  const { resetSelectedCarState } = useCarInitialState();

  useEffect(() => {
    resetSelectedCarState();
    getAllCars();
  }, []);

  return (
    <article css={styles.contentWrapper}>
      <section css={styles.textSection}>
        <h1 css={styles.headingText}>Configure a car</h1>
        <p css={styles.subheadingText}>
          Pick your favorite model and start configuring.
        </p>
      </section>
      {isLoaded ? (
        <Carousel type="dragFreeCarousel">
          {cars.map((item) => (
            <CarouselCard key={item.carId} {...item} />
          ))}
        </Carousel>
      ) : null}
    </article>
  );
};
