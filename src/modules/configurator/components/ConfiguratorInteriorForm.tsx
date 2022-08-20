/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/ConfiguratorExteriorInteriorForm.styles';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { Carousel } from 'shared/components';
import { CarouselImageSlider } from './CarouselImageSlider';
import { SidebarCard } from './SidebarCard';
import { TotalPriceCard } from './TotalPriceCard';
import { ReactComponent as RightArrow } from 'assets/configurator/arrowRight.svg';
import { Link } from 'react-router-dom';
import { SidebarInteriorPicker } from './SidebarInteriorPicker';

export const ConfiguratorInteriorForm: React.FC = () => {
  const selectedInterior = useRecoilValue(configuratorAtoms.selectedInterior);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [interiorPickerToggled, setInteriorPickerToggled] = useState(false);

  function handleSidebarInteriorSelect(itemType: string) {
    setSelectedSidebarItem(itemType);
    setInteriorPickerToggled(true);
  }

  function closeSidebarPicker() {
    setInteriorPickerToggled(false);
  }

  return (
    <div css={styles.configurationContainer}>
      <ConfiguratorNavbar isNavigationHidden={interiorPickerToggled} />
      <section css={styles.contentContainer}>
        <div css={styles.carouselSiderContainer}>
          <Carousel type="carDetailsCarousel">
            <CarouselImageSlider imagesType="interior" />
          </Carousel>
        </div>
        <SidebarInteriorPicker
          isToggled={interiorPickerToggled}
          hideSidebar={closeSidebarPicker}
          selectedSidebarItem={selectedSidebarItem}
        />
        <div css={styles.sidebar}>
          <div css={styles.sidebarContainer}>
            <div css={styles.sidebarItemContainer}>
              <SidebarCard
                itemImage={selectedInterior.iconUrl}
                itemName={selectedInterior.interiorName}
                itemType="color"
                handleItemClick={handleSidebarInteriorSelect}
              />
            </div>
            <TotalPriceCard direction="row" />
          </div>

          <div>
            <Link to="/configurator-summary" css={styles.sidebarButton}>
              Summary
              <RightArrow css={styles.buttonImage} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
