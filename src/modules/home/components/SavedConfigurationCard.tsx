/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/SavedConfiguration.styles';
import dots from 'assets/home/dots.svg';
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
  const [isToggled, setIsToggled] = useState(false);
  const { car, color, wheels, interior, createdAt, carSideImage, documentId } =
    data;
  const { deleteCarConfiguration } = useCarConfiguration();

  function handleToggleDropdown() {
    setIsToggled(!isToggled);
  }

  function handleOnEditConfiguration() {
    updateConfiguration({ car, color, wheels, interior, documentId });
  }

  function handleDeleteConfiguration() {
    if (documentId) {
      deleteCarConfiguration(documentId);
    }
  }

  function dateOrdinal() {
    const date = createdAt.toDate();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    let ordinal = '';
    if (day > 3 && day < 21) ordinal = 'th';
    switch (day % 10) {
      case 1:
        ordinal = 'st';
      case 2:
        ordinal = 'nd';
      case 3:
        ordinal = 'rd';
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
        <button css={styles.dotsButton} onClick={handleToggleDropdown}>
          <img className="dots" src={dots} />
        </button>
        <DropdownMenu isToggled={isToggled} type="carConfigDropdown">
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
