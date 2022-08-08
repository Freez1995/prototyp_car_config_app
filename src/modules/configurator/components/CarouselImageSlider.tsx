/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as styles from '../styles/CarouselImageSlider.styles';
import arrowLeft from 'assets/configurator/arrowLeft.svg';
import arrowRight from 'assets/configurator/arrowRight.svg';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../state';

interface Props {
  imagesType: 'exterior' | 'interior';
}

export const CarouselImageSlider: React.FC<Props> = ({ imagesType }) => {
  const exterior = useRecoilValue(configuratorAtoms.carExterior);
  const interior = useRecoilValue(configuratorAtoms.selectedInterior);
  const [images, setImages] = useState<string[]>([]);
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
      return;
    }
    setSlideIndex(1);
  }

  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
      return;
    }
    setSlideIndex(images.length);
  }

  useEffect(() => {
    imagesType === 'exterior'
      ? setImages(exterior.imgUrl)
      : setImages(interior.imgUrl);
  }, [imagesType, exterior, interior]);

  return (
    <>
      <div
        css={
          imagesType === 'exterior'
            ? styles.carouselExteriorContainer
            : styles.carouselInteriorContainer
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            css={
              index + 1 === slideIndex
                ? [styles.carouselSlide, styles.activeSlide]
                : styles.carouselSlide
            }
          >
            <img
              css={
                imagesType === 'exterior'
                  ? styles.carouselExteriorImage
                  : styles.carouselInteriorImage
              }
              src={image}
            />
          </div>
        ))}
      </div>
      <div css={styles.carouselNavigation}>
        <button css={styles.carouselButton} onClick={prevSlide}>
          <img src={arrowLeft} />
        </button>
        <p css={styles.currentSlideText}>
          {slideIndex} <span css={styles.maxSlidesText}>/ {images.length}</span>
        </p>
        <button css={styles.carouselButton} onClick={nextSlide}>
          <img src={arrowRight} />
        </button>
      </div>
    </>
  );
};
