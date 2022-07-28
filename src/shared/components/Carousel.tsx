/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/Carousel.styles';
import useEmblaCarousel from 'embla-carousel-react';
import { SerializedStyles } from '@emotion/react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'dragFreeCarousel' | 'loopCarousel';
  extraStyles?: SerializedStyles;
  children: React.ReactNode;
}

export const Carousel: React.FC<Props> = ({
  type,
  extraStyles,
  children,
  ...rest
}) => {
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: type === 'dragFreeCarousel' ? true : false,
  });

  return (
    <div css={styles.carousel} ref={emblaRef}>
      <div css={[styles[type], extraStyles]} {...rest}>
        {children}
      </div>
    </div>
  );
};
