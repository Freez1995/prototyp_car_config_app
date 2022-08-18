/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/ConfigurationDetailsForm.styles';
import { Link } from 'react-router-dom';
import { ConfigurationDetailsCard } from './ConfigurationDetailsCard';
import { TotalPriceCard } from './TotalPriceCard';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms, configuratorSelectors } from '../state';

interface Props {
  type: 'configurationView' | 'configuratorSummary';
}
export const ConfigurationDetailsForm: React.FC<Props> = ({ type }) => {
  const selectedCar = useRecoilValue(configuratorAtoms.selectedCar);
  const selectedColors = useRecoilValue(configuratorAtoms.selectedColor);
  const selectedWheels = useRecoilValue(configuratorAtoms.selectedWheels);
  const selectedInteriors = useRecoilValue(configuratorAtoms.selectedInterior);
  const totalPrice = useRecoilValue(configuratorSelectors.carTotalPrice);

  return (
    <div>
      <section css={styles.carDescriptionContainer}>
        <article>
          <h1 css={styles.carName}>{selectedCar.carModel.toUpperCase()}</h1>
          <p css={styles.carYear}>{selectedCar.carYear}</p>
        </article>
        <TotalPriceCard direction="column" />
      </section>
      <article css={styles.detailsContainer}>
        <h2 css={styles.detailsText}>Your configuration details</h2>
        <section css={styles.details}>
          <div css={styles.detailsInnerContainer}>
            <article css={styles.detailsHeading}>
              <h2>Exterior</h2>
              <Link
                css={
                  type === 'configuratorSummary'
                    ? styles.detailsHeadingLink
                    : styles.detailsHeadingLinkHidden
                }
                to="/configurator-exterior"
              >
                Edit
              </Link>
            </article>
            <ConfigurationDetailsCard
              image={selectedColors.iconUrl}
              detailsText={selectedColors.colorName}
              detailsPrice={selectedColors.colorPrice}
            />
            <ConfigurationDetailsCard
              image={selectedWheels.iconUrl}
              detailsText={selectedWheels.wheelsModel}
              detailsPrice={selectedWheels.wheelsPrice}
            />
          </div>
          <div css={styles.detailsInnerContainer}>
            <article css={styles.detailsHeading}>
              <h2>Interior</h2>
              <Link
                css={
                  type === 'configuratorSummary'
                    ? styles.detailsHeadingLink
                    : styles.detailsHeadingLinkHidden
                }
                to="/configurator-interior"
              >
                Edit
              </Link>
            </article>
            <ConfigurationDetailsCard
              image={selectedInteriors.iconUrl}
              detailsText={selectedInteriors.interiorName}
              detailsPrice={selectedInteriors.interiorPrice}
            />
          </div>
          <div css={styles.totalPriceContainer}>
            <p>Total</p>
            <p>
              {totalPrice.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              €
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
