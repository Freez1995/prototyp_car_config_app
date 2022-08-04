import { css } from '@emotion/react';
import { medium } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const carouselContainer = css`
  position: relative;
  max-width: 100%;
  min-height: 340px;
`;

export const carouselSlide = css`
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
`;

export const activeSlide = css`
  opacity: 1;
`;

export const carouselImage = css`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const carouselNavigation = css`
  ${medium}
  display: flex;
  justify-content: center;
  margin: 40px 0;
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.regular};
`;

export const currentSlideText = css`
  margin: 0 16px;
  color: ${colors.textPrimaryDarkest};
`;

export const maxSlidesText = css`
  color: ${colors.textPrimaryLight};
`;

export const carouselButton = css`
  border: none;
  display: flex;
  align-items: center;
`;
