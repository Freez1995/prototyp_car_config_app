/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/ImageSlide.styles';
import arrowLeft from 'assets/configurator/arrowLeft.svg';
import arrowRight from 'assets/configurator/arrowRight.svg';

interface Props {
  exteriorImages: string[];
}
export const ImageSlide: React.FC<Props> = ({ exteriorImages }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  function nextSlide() {
    if (slideIndex !== exteriorImages.length) {
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
    setSlideIndex(exteriorImages.length);
  }

  return (
    <>
      <div css={styles.carouselContainer}>
        {exteriorImages.map((image, index) => (
          <div
            key={index}
            css={
              index + 1 === slideIndex
                ? [styles.carouselSlide, styles.activeSlide]
                : styles.carouselSlide
            }
          >
            <img css={styles.carouselImage} src={image} />
          </div>
        ))}
      </div>
      <div css={styles.carouselNavigation}>
        <button css={styles.carouselButton} onClick={prevSlide}>
          <img src={arrowLeft} />
        </button>
        <p css={styles.currentSlideText}>
          {slideIndex}{' '}
          <span css={styles.maxSlidesText}>/ {exteriorImages.length}</span>
        </p>
        <button css={styles.carouselButton} onClick={nextSlide}>
          <img src={arrowRight} />
        </button>
      </div>
    </>
  );
};
