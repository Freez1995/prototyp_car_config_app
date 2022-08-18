/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SidebarPicker.styles';
import { ReactComponent as CloseIcon } from 'assets/configurator/closeIcon.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';
import { SidebarPickerCard } from './SidebarPickerCard';
import { Wheels } from 'types';

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
  const [selectedWheels, setSelectedWheels] = useRecoilState(
    configuratorAtoms.selectedWheels,
  );
  const [currentWheels, setCurrentWheels] = useState<Wheels>(selectedWheels);
  const wheels = useRecoilValue(configuratorAtoms.carWheels);

  useEffect(() => {
    setCurrentWheels(selectedWheels);
  }, [isToggled]);

  function handleOnWheelsSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const newSelectedWheels = wheels.find(
      (wheels) => wheels.wheelsId === e.currentTarget.value,
    );
    newSelectedWheels && setSelectedWheels(newSelectedWheels);
  }

  function handleCloseSidebar() {
    setSelectedWheels(currentWheels);
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
                isChecked={selectedWheels.wheelsId === wheels.wheelsId}
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
