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

export const SidebarWheelsPicker: React.FC<Props> = ({
  isToggled,
  hideSidebar,
  selectedSidebarItem,
}) => {
  const [pickedWheelsId, setPickedWheelsId] = useState<string>('');
  const wheels = useRecoilValue(configuratorAtoms.carWheels);
  const [selectedWheels, setSelectedWheels] = useRecoilState(
    configuratorAtoms.selectedWheels,
  );

  useEffect(() => {
    setPickedWheelsId(selectedWheels.wheelsId);
  }, []);

  function handleOnWheelsSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setPickedWheelsId(e.currentTarget.value);
  }

  function onWheelsSave() {
    const newSelectedWheels = wheels.find(
      (wheels) => wheels.wheelsId === pickedWheelsId,
    );
    newSelectedWheels && setSelectedWheels(newSelectedWheels);

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
            {wheels.map((wheels) => (
              <SidebarPickerCard
                key={wheels.wheelsId}
                radioButtonName={'wheels'}
                radioButtonId={wheels.wheelsId}
                radioButtonValue={wheels.wheelsId}
                itemImage={wheels.iconUrl}
                itemName={wheels.wheelsModel}
                itemPrice={wheels.wheelsPrice}
                handleOnItemSelect={handleOnWheelsSelect}
                isChecked={pickedWheelsId === wheels.wheelsId}
              />
            ))}
          </div>
        </div>
        <TotalPriceCard direction="row" />
      </div>
      <button css={styles.doneButton} onClick={onWheelsSave}>
        Done
      </button>
    </div>
  );
};
