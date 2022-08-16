/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import * as styles from '../styles/HomeContent.styles';
import { Link } from 'react-router-dom';
import emptyStateCar from 'assets/home/emptyStateCar.svg';
import { SavedConfigurationCard } from './SavedConfigurationCard';
import { useCarConfiguration } from 'modules/firebase';
import { useHomeContent } from '../hooks';

export const HomeContent: React.FC = () => {
  const { savedConfigurations, getSavedConfigurations } = useCarConfiguration();
  const { handleUpdateConfiguration } = useHomeContent();

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
      {savedConfigurations.length ? (
        <div css={styles.savedConfigurationCards}>
          {savedConfigurations.map((configuration) => (
            <SavedConfigurationCard
              key={configuration.documentId}
              data={configuration}
              updateConfiguration={handleUpdateConfiguration}
            />
          ))}
        </div>
      ) : (
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
      )}
    </article>
  );
};
