/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import * as styles from '../styles/SelectorContent.styles';
import { Carousel } from 'shared/components';
import { CarouselCard } from './CarouselCard';
import { useCars } from 'modules/firebase';

export const SelectorContent: React.FC = () => {
  const { cars, isLoaded, getAllCars, resetRecoilState } = useCars();

  useEffect(() => {
    getAllCars();
    resetRecoilState();
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
