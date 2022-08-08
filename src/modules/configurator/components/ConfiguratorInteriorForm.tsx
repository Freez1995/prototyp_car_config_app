/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/ConfiguratorExteriorForm.styles';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { Carousel } from 'shared/components';
import { CarouselImageSlider } from './CarouselImageSlider';
import { SelectorSidebar } from './SelectorSidebar';
import { SidebarCard } from './SidebarCard';
import { TotalPriceCard } from './TotalPriceCard';
import { ReactComponent as RightArrow } from 'assets/configurator/arrowRight.svg';
import { Link } from 'react-router-dom';

export const ConfiguratorInteriorForm: React.FC = () => {
  const selectedInterior = useRecoilValue(configuratorAtoms.selectedInterior);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [selectorSidebarToggled, setSelectorSidebarToggled] = useState(false);

  function handleSidebarItemClick(itemType: string) {
    setSelectedSidebarItem(itemType);
    setSelectorSidebarToggled(true);
  }

  function closeSelectorSidebar() {
    setSelectorSidebarToggled(false);
  }

  return (
    <div css={styles.configurationContainer}>
      <ConfiguratorNavbar isNavigationHidden={selectorSidebarToggled} />
      <section css={styles.contentContainer}>
        <div css={styles.carouselSiderContainer}>
          <Carousel type="carDetailsCarousel">
            <CarouselImageSlider imagesType="interior" />
          </Carousel>
        </div>
        <SelectorSidebar
          isToggled={selectorSidebarToggled}
          hideSidebar={closeSelectorSidebar}
          selectedSidebarItem={selectedSidebarItem}
        />
        <div css={styles.sidebar}>
          <div css={styles.sidebarContainer}>
            <SidebarCard
              itemImage={selectedInterior.iconUrl}
              itemName={selectedInterior.interiorName}
              itemType="color"
              handleItemClick={handleSidebarItemClick}
            />
          </div>
          <div>
            <TotalPriceCard direction="row" />
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
