/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SidebarPicker.styles';
import { ReactComponent as CloseIcon } from 'assets/configurator/closeIcon.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';
import { SidebarPickerCard } from './SidebarPickerCard';

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
  const [pickedColorId, setPickedColorId] = useState<string>('');
  const colors = useRecoilValue(configuratorAtoms.carColors);
  const [selectedColor, setSelectedColor] = useRecoilState(
    configuratorAtoms.selectedColor,
  );

  useEffect(() => {
    setPickedColorId(selectedColor.colorId);
  }, []);

  function handleOnColorSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setPickedColorId(e.currentTarget.value);
  }

  function onColorSave() {
    const newSelectedColor = colors.find(
      (color) => color.colorId === pickedColorId,
    );
    newSelectedColor && setSelectedColor(newSelectedColor);

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
            <button css={styles.headingButton} onClick={hideSidebar}>
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
                isChecked={pickedColorId === color.colorId}
              />
            ))}
          </div>
        </div>
        <TotalPriceCard direction="row" />
      </div>
      <button css={styles.doneButton} onClick={onColorSave}>
        Done
      </button>
    </div>
  );
};
