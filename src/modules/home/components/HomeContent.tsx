/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/HomeContent.styles';
import { Link } from 'react-router-dom';
import emptyStateCar from 'assets/home/emptyStateCar.png';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from 'firebaseConfig';

export const HomeContent: React.FC = () => {
  const [configurationExist, setConfigurationExist] = useState(false);
  const savedConfigsCollection = collection(db, 'savedConfigurations');

  const getSavedConfigs = async () => {
    const savedConfigsQuery = query(savedConfigsCollection);
    const querySnapshot = await getDocs(savedConfigsQuery);
    querySnapshot.size === 0 && setConfigurationExist(false);
  };

  useEffect(() => {
    return () => {
      getSavedConfigs();
    };
  }, []);

  return configurationExist ? (
    <div>Here are your configs</div>
  ) : (
    <article css={styles.contentWrapper}>
      <section css={styles.headingContainer}>
        <h1 css={styles.headingText}>View saved configurations</h1>
        <Link css={styles.headingLink} to="/select-car">
          Configure a car
        </Link>
      </section>
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
    </article>
  );
};
