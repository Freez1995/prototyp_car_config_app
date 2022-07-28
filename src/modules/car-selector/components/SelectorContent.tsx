/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SelectorContent.styles';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import { Carousel } from 'shared/components';
import { CarouselCard } from './CarouselCard';
import { Car } from '../models';
import { isCarType } from '../typeguards';

export const SelectorContent: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const carsCollection = collection(db, 'cars');

  const getAllCars = async () => {
    const carsQuery = query(carsCollection);
    const querySnapshot = await getDocs(carsQuery);
    querySnapshot.forEach((snapshot) => {
      const carId = snapshot.id;
      const data = snapshot.data();
      isCarType(data) &&
        setCars((cars) => [...cars, { ...data, carId: carId }]);
    });
    setIsLoaded(true);
  };

  useEffect(() => {
    return () => {
      getAllCars();
    };
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
