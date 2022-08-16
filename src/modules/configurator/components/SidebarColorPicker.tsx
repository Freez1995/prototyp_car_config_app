/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SidebarPicker.styles';
import { ReactComponent as CloseIcon } from 'assets/configurator/closeIcon.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';
import { SidebarPickerCard } from './SidebarPickerCard';
import { Color } from 'types';

interface Props {
  isToggled: boolean;
  hideSidebar: () => void;
  selectedSidebarItem: string;
}

export const SidebarColorPicker: React.FC<Props> = ({
  isToggled,
  hideSidebar,
  selectedSidebarItem,
}) => {
  const [selectedColor, setSelectedColor] = useRecoilState(
    configuratorAtoms.selectedColor,
  );
  const [currentColor, setCurrentColor] = useState<Color>(selectedColor);
  const colors = useRecoilValue(configuratorAtoms.carColors);

  useEffect(() => {
    setCurrentColor(selectedColor);
  }, [isToggled]);

  function handleOnColorSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const newSelectedColor = colors.find(
      (color) => color.colorId === e.currentTarget.value,
    );
    newSelectedColor && setSelectedColor(newSelectedColor);
  }

  function handleCloseSidebar() {
    setSelectedColor(currentColor);
    hideSidebar();
  }

  return (
    <div
      css={
        isToggled
          ? [styles.selectorSidebar, styles.selectorSidebarActive]
          : styles.selectorSidebar
      }
    >
      <div css={styles.selectorSidebarContainer}>
        <div css={styles.sidebarContentContainer}>
          <div css={styles.headingContainer}>
            <p css={styles.headingText}>{selectedSidebarItem}</p>
            <button css={styles.headingButton} onClick={handleCloseSidebar}>
              <CloseIcon css={styles.headingButtonImage} />
            </button>
          </div>
          <div css={styles.selectorSidebarCard}>
            {colors.map((color) => (
              <SidebarPickerCard
                key={color.colorId}
                radioButtonName={'color'}
                radioButtonId={color.colorId}
                radioButtonValue={color.colorId}
                itemImage={color.iconUrl}
                itemName={color.colorName}
                itemPrice={color.colorPrice}
                handleOnItemSelect={handleOnColorSelect}
                isChecked={selectedColor.colorId === color.colorId}
              />
            ))}
          </div>
        </div>
        <TotalPriceCard direction="row" />
      </div>
      <button css={styles.doneButton} onClick={hideSidebar}>
        Done
      </button>
    </div>
  );
};
