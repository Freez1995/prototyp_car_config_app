/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/SidebarPickerCard.styles';
import checkedIcon from 'assets/configurator/checkedIcon.svg';

interface Props {
  radioButtonName: string;
  radioButtonId: string;
  radioButtonValue: string;
  itemImage: string;
  itemName: string;
  itemPrice: number;
  handleOnItemSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export const SidebarPickerCard: React.FC<Props> = ({
  radioButtonName,
  radioButtonId,
  radioButtonValue,
  itemImage,
  itemName,
  itemPrice,
  handleOnItemSelect,
  isChecked,
}) => {
  return (
    <div>
      <input
        css={styles.inputRadioButton}
        type="radio"
        name={radioButtonName}
        id={radioButtonId}
        value={radioButtonValue}
        onChange={handleOnItemSelect}
      />
      <label css={styles.radioButtonContainer} htmlFor={radioButtonId}>
        <div css={styles.radioImageContainer}>
          <img css={styles.radioItemImage} src={itemImage} />
          <img
            css={isChecked ? styles.checkedItem : styles.uncheckedItem}
            src={checkedIcon}
          />
        </div>
        <div css={styles.radioTextContainer}>
          <p css={styles.radioItemName}>{itemName}</p>
          <p css={styles.radioItemPrice}>
            {itemPrice.toLocaleString('en-US')} €
          </p>
        </div>
      </label>
    </div>
  );
};
