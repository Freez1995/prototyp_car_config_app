/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/ConfiguratorExteriorInteriorForm.styles';
import { useRecoilValue } from 'recoil';
import { Carousel } from 'shared/components';
import { configuratorAtoms } from '../state';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { CarouselImageSlider } from './CarouselImageSlider';
import { TotalPriceCard } from './TotalPriceCard';
import { ReactComponent as RightArrow } from 'assets/configurator/arrowRight.svg';
import { SidebarCard } from './SidebarCard';
import { Link } from 'react-router-dom';
import { SidebarColorPicker } from './SidebarColorPicker';
import { SidebarWheelsPicker } from './SidebarWheelsPicker';

export const ConfiguratorExteriorForm: React.FC = () => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('');
  const [colorPickerToggled, setColorPickerToggled] = useState(false);
  const [wheelsPickerToggled, setWheelsPickerToggled] = useState(false);
  const selectedColor = useRecoilValue(configuratorAtoms.selectedColor);
  const selectedWheels = useRecoilValue(configuratorAtoms.selectedWheels);

  function handleSidebarWheelsSelect(itemType: string) {
    setSelectedSidebarItem(itemType);
    setWheelsPickerToggled(true);
  }

  function handleSidebarColorSelect(itemType: string) {
    setSelectedSidebarItem(itemType);
    setColorPickerToggled(true);
  }

  function closeSidebarPicker() {
    setWheelsPickerToggled(false);
    setColorPickerToggled(false);
  }

  return (
    <div css={styles.configurationContainer}>
      <ConfiguratorNavbar
        isNavigationHidden={colorPickerToggled || wheelsPickerToggled}
      />
      <section css={styles.contentContainer}>
        <div css={styles.carouselSiderContainer}>
          <Carousel type="carDetailsCarousel">
            <CarouselImageSlider imagesType="exterior" />
          </Carousel>
        </div>
        <SidebarColorPicker
          isToggled={colorPickerToggled}
          hideSidebar={closeSidebarPicker}
          selectedSidebarItem={selectedSidebarItem}
        />
        <SidebarWheelsPicker
          isToggled={wheelsPickerToggled}
          hideSidebar={closeSidebarPicker}
          selectedSidebarItem={selectedSidebarItem}
        />
        <div css={styles.sidebar}>
          <div css={styles.sidebarContainer}>
            <SidebarCard
              itemImage={selectedColor.iconUrl}
              itemName={selectedColor.colorName}
              itemType="paint color"
              handleItemClick={handleSidebarColorSelect}
            />
            <SidebarCard
              itemImage={selectedWheels.iconUrl}
              itemName={selectedWheels.wheelsModel}
              itemType="wheels"
              handleItemClick={handleSidebarWheelsSelect}
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
