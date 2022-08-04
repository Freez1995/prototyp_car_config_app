/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Carousel.styles';
import useEmblaCarousel from 'embla-carousel-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'dragFreeCarousel' | 'carExteriorCarousel';
  children: React.ReactNode;
}

export const Carousel: React.FC<Props> = ({ type, children, ...rest }) => {
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: type === 'dragFreeCarousel' ? true : false,
    draggable: type === 'carExteriorCarousel' ? false : true,
  });

  return (
    <div css={styles.carousel} ref={emblaRef}>
      <div css={styles[type]} {...rest}>
        {children}
      </div>
    </div>
  );
};
