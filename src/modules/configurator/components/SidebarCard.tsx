/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/SidebarCard.styles';
import checkedIcon from 'assets/configurator/checkedIcon.svg';

interface Props {
  itemName: string;
  itemType: 'paint color' | 'wheels' | 'color';
  itemImage: string;
  handleItemClick: (itemType: string) => void;
}

export const SidebarCard: React.FC<Props> = ({
  itemImage,
  itemName,
  itemType,
  handleItemClick,
}) => {
  return (
    <button
      css={styles.buttonContainer}
      onClick={() => handleItemClick(itemType)}
    >
      <div css={styles.imageContainer}>
        <img css={styles.itemImage} src={itemImage} />
        <img css={styles.checkedIcon} src={checkedIcon} />
      </div>
      <div css={styles.textContainer}>
        <p css={styles.itemName}>{itemName}</p>
        <p css={styles.itemType}>{itemType.toUpperCase()}</p>
      </div>
    </button>
  );
};
