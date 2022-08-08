/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/ConfiguratorExteriorForm.styles';
import { useRecoilValue } from 'recoil';
import { Carousel } from 'shared/components';
import { configuratorAtoms } from '../state';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { CarouselImageSlider } from './CarouselImageSlider';
import { TotalPriceCard } from './TotalPriceCard';
import { ReactComponent as RightArrow } from 'assets/configurator/arrowRight.svg';
import { SidebarCard } from './SidebarCard';
import { SelectorSidebar } from './SelectorSidebar';
import { useCarExterior } from 'modules/firebase/hooks/useCarExterior';
import { Link } from 'react-router-dom';

export const ConfiguratorExteriorForm: React.FC = () => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [selectorSidebarToggled, setSelectorSidebarToggled] = useState(false);
  const { getCarExterior } = useCarExterior();
  const selectedColor = useRecoilValue(configuratorAtoms.selectedColor);
  const selectedWheels = useRecoilValue(configuratorAtoms.selectedWheels);

  function handleSidebarItemClick(itemType: string) {
    setSelectedSidebarItem(itemType);
    setSelectorSidebarToggled(true);
  }

  function closeSelectorSidebar() {
    setSelectorSidebarToggled(false);
  }

  useEffect(() => {
    getCarExterior(selectedColor.colorId, selectedWheels.wheelsId);
  }, [selectedColor, selectedWheels]);

  return (
    <div css={styles.configurationContainer}>
      <ConfiguratorNavbar isNavigationHidden={selectorSidebarToggled} />
      <section css={styles.contentContainer}>
        <div css={styles.carouselSiderContainer}>
          <Carousel type="carDetailsCarousel">
            <CarouselImageSlider imagesType="exterior" />
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
              itemImage={selectedColor.iconUrl}
              itemName={selectedColor.colorName}
              itemType="paint color"
              handleItemClick={handleSidebarItemClick}
            />
            <SidebarCard
              itemImage={selectedWheels.iconUrl}
              itemName={selectedWheels.wheelsModel}
              itemType="wheels"
              handleItemClick={handleSidebarItemClick}
            />
          </div>
          <div>
            <TotalPriceCard direction="row" />
            <Link to="/configurator-interior" css={styles.sidebarButton}>
              Interior
              <RightArrow css={styles.buttonImage} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
