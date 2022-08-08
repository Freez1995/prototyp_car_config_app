/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SelectorSidebar.styles';
import { ReactComponent as CloseIcon } from 'assets/configurator/closeIcon.svg';
import { TotalPriceCard } from './TotalPriceCard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { SelectorSidebarCard } from './SelectorSidebarCard';

interface Props {
  isToggled: boolean;
  hideSidebar: () => void;
  selectedSidebarItem: string;
}

export const SelectorSidebar: React.FC<Props> = ({
  isToggled,
  hideSidebar,
  selectedSidebarItem,
}) => {
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const colors = useRecoilValue(configuratorAtoms.carColors);
  const wheels = useRecoilValue(configuratorAtoms.carWheels);
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);
  const [selectedColor, setSelectedColor] = useRecoilState(
    configuratorAtoms.selectedColor,
  );
  const [selectedWheels, setSelectedWheels] = useRecoilState(
    configuratorAtoms.selectedWheels,
  );
  const [selectedInteriors, setSelectedInterior] = useRecoilState(
    configuratorAtoms.selectedInterior,
  );

  function handleOnItemSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedItemId(e.currentTarget.value);
  }

  function generateItems() {
    switch (selectedSidebarItem) {
      case 'paint color': {
        return (
          <>
            {colors.map((color) => (
              <SelectorSidebarCard
                key={color.colorId}
                radioButtonName={'color'}
                radioButtonId={color.colorId}
                radioButtonValue={color.colorId}
                itemImage={color.iconUrl}
                itemName={color.colorName}
                itemPrice={color.colorPrice}
                handleOnItemSelect={handleOnItemSelect}
                isChecked={selectedItemId === color.colorId}
              />
            ))}
          </>
        );
      }
      case 'wheels': {
        return (
          <>
            {wheels.map((item) => (
              <SelectorSidebarCard
                key={item.wheelsId}
                radioButtonName={'wheels'}
                radioButtonId={item.wheelsId}
                radioButtonValue={item.wheelsId}
                itemImage={item.iconUrl}
                itemName={item.wheelsModel}
                itemPrice={item.wheelsPrice}
                handleOnItemSelect={handleOnItemSelect}
                isChecked={selectedItemId === item.wheelsId}
              />
            ))}
          </>
        );
      }
      case 'color': {
        return (
          <>
            {interiors.map((item) => (
              <SelectorSidebarCard
                key={item.interiorId}
                radioButtonName={'interior'}
                radioButtonId={item.interiorId}
                radioButtonValue={item.interiorId}
                itemImage={item.iconUrl}
                itemName={item.interiorName}
                itemPrice={item.interiorPrice}
                handleOnItemSelect={handleOnItemSelect}
                isChecked={selectedItemId === item.interiorId}
              />
            ))}
          </>
        );
      }
      default:
        return null;
    }
  }

  useEffect(() => {
    if (selectedSidebarItem === 'paint color')
      setSelectedItemId(selectedColor.colorId);
    if (selectedSidebarItem === 'wheels')
      setSelectedItemId(selectedWheels.wheelsId);
    if (selectedSidebarItem === 'color')
      setSelectedItemId(selectedInteriors.interiorId);
  }, [isToggled]);

  function onSaveItem() {
    switch (selectedSidebarItem) {
      case 'paint color':
        const newSelectedColor = colors.find(
          (item) => item.colorId === selectedItemId,
        );
        newSelectedColor && setSelectedColor(newSelectedColor);
        break;
      case 'wheels':
        const newSelectedWheels = wheels.find(
          (item) => item.wheelsId === selectedItemId,
        );
        newSelectedWheels && setSelectedWheels(newSelectedWheels);
        break;
      case 'color':
        const newSelectedInterior = interiors.find(
          (item) => item.interiorId === selectedItemId,
        );
        newSelectedInterior && setSelectedInterior(newSelectedInterior);
        break;
    }
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
          <div css={styles.selectorSidebarCard}>{generateItems()}</div>
        </div>
        <TotalPriceCard direction="row" />
      </div>
      <button css={styles.doneButton} onClick={onSaveItem}>
        Done
      </button>
    </div>
  );
};
