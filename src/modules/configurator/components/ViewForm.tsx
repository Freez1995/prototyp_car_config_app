/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/ViewForm.styles';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';
import { ConfiguratorNavbar } from './ConfiguratorNavbar';
import { Carousel } from 'shared/components';
import { ImageSlide } from './ImageSlide';
import { FormDetails } from './FormDetails';
import { useCarInitialState } from '../hooks';

export const ViewForm: React.FC = () => {
  const { isLoading, resetSelectedCarState } = useCarInitialState();
  const exterior = useRecoilValue(configuratorAtoms.carExterior);
  const navigate = useNavigate();

  function handleOnDelete() {
    resetSelectedCarState();
    navigate('/select-car', { replace: true });
  }

  return !isLoading ? (
    <div>
      <ConfiguratorNavbar>
        <Link css={styles.editConfiguration} to="/configuration-exterior">
          Edit configuration
        </Link>
        <button css={styles.deleteConfiguration} onClick={handleOnDelete}>
          Delete
        </button>
      </ConfiguratorNavbar>
      <article css={styles.contentWrapper}>
        <Carousel type="carExteriorCarousel">
          <ImageSlide exteriorImages={exterior.imgUrl} />
        </Carousel>
        <FormDetails type="configurationView" />
      </article>
    </div>
  ) : null;
};
