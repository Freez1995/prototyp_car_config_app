/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/SavedConfigurationCard.styles';
import { DropdownMenu } from 'shared/components';
import { SavedCarConfiguration, UpdateCarConfiguration } from 'types';
import { useCarConfiguration } from 'modules/firebase';

interface Props {
  data: SavedCarConfiguration;
  updateConfiguration: ({
    car,
    color,
    wheels,
    interior,
    documentId,
  }: UpdateCarConfiguration) => void;
}

export const SavedConfigurationCard: React.FC<Props> = ({
  data,
  updateConfiguration,
}) => {
  const { car, color, wheels, interior, createdAt, carSideImage, documentId } =
    data;
  const { deleteCarConfiguration } = useCarConfiguration();

  function handleOnEditConfiguration() {
    updateConfiguration({ car, color, wheels, interior, documentId });
  }

  function handleDeleteConfiguration() {
    if (!documentId) return;
    deleteCarConfiguration(documentId);
  }

  function dateOrdinal() {
    const date = createdAt.toDate();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    let ordinal = '';
    if (day > 10 && day < 14) return `${month} ${day}th ${year}`;
    switch (day % 10) {
      case 1:
        ordinal = 'st';
        break;
      case 2:
        ordinal = 'nd';
        break;
      case 3:
        ordinal = 'rd';
        break;
      default:
        ordinal = 'th';
    }
    return `${month} ${day}${ordinal} ${year}`;
  }

  return (
    <div css={styles.cardContainer}>
      <div css={styles.cardContentContainer}>
        <section css={styles.imageContainer}>
          <img css={styles.carImage} src={carSideImage} />
        </section>
        <section css={styles.carInfoContainer}>
          <p css={styles.carYearText}>{car.carYear}</p>
          <h1 css={styles.carNameText}>{car.carModel}</h1>
          <p css={styles.carColorText}>{color.colorName.toUpperCase()}</p>
          <p css={styles.carDateText}>Created {dateOrdinal()}</p>
        </section>
      </div>
      <div css={styles.dropdownContainer}>
        <DropdownMenu type="carConfigDropdown">
          <button
            css={styles.dropdownButtonEdit}
            onClick={handleOnEditConfiguration}
          >
            Edit configuration
          </button>
          <button
            css={styles.dropdownButtonDelete}
            onClick={handleDeleteConfiguration}
          >
            Delete
          </button>
        </DropdownMenu>
      </div>
    </div>
  );
};
