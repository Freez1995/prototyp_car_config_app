/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/SidebarPicker.styles';
import { ReactComponent as CloseIcon } from 'assets/configurator/closeIcon.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { TotalPriceCard } from './TotalPriceCard';
import { SidebarPickerCard } from './SidebarPickerCard';
import { Interior } from 'types';

interface Props {
  isToggled: boolean;
  hideSidebar: () => void;
  selectedSidebarItem: string;
}

export const SidebarInteriorPicker: React.FC<Props> = ({
  isToggled,
  hideSidebar,
  selectedSidebarItem,
}) => {
  const [selectedInterior, setSelectedInterior] = useRecoilState(
    configuratorAtoms.selectedInterior,
  );
  const [currentInterior, setCurrentInterior] =
    useState<Interior>(selectedInterior);
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);

  useEffect(() => {
    setCurrentInterior(selectedInterior);
  }, [isToggled]);

  function handleOnInteriorSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const newSelectedInterior = interiors.find(
      (interior) => interior.interiorId === e.currentTarget.value,
    );
    newSelectedInterior && setSelectedInterior(newSelectedInterior);
  }

  function handleCloseSidebar() {
    setSelectedInterior(currentInterior);
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
            {interiors.map((interior) => (
              <SidebarPickerCard
                key={interior.interiorId}
                radioButtonName={'interior'}
                radioButtonId={interior.interiorId}
                radioButtonValue={interior.interiorId}
                itemImage={interior.iconUrl}
                itemName={interior.interiorName}
                itemPrice={interior.interiorPrice}
                handleOnItemSelect={handleOnInteriorSelect}
                isChecked={selectedInterior.interiorId === interior.interiorId}
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
