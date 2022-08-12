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

export const SidebarInteriorPicker: React.FC<Props> = ({
  isToggled,
  hideSidebar,
  selectedSidebarItem,
}) => {
  const [pickedInteriorId, setPickedInteriorId] = useState<string>('');
  const interiors = useRecoilValue(configuratorAtoms.carInteriors);
  const [selectedInteriors, setSelectedInterior] = useRecoilState(
    configuratorAtoms.selectedInterior,
  );

  useEffect(() => {
    setPickedInteriorId(selectedInteriors.interiorId);
  }, []);

  function handleOnInteriorSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setPickedInteriorId(e.currentTarget.value);
  }

  function onInteriorSave() {
    const newSelectedInterior = interiors.find(
      (interior) => interior.interiorId === pickedInteriorId,
    );
    newSelectedInterior && setSelectedInterior(newSelectedInterior);

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
                isChecked={pickedInteriorId === interior.interiorId}
              />
            ))}
          </div>
        </div>
        <TotalPriceCard direction="row" />
      </div>
      <button css={styles.doneButton} onClick={onInteriorSave}>
        Done
      </button>
    </div>
  );
};
