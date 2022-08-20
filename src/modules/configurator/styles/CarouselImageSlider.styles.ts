import { css } from '@emotion/react';
import { fontSizeBase, fontSizeMedium } from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const carouselExteriorContainer = css`
  position: relative;
  min-height: 340px;
  @media ${breakpoints.small} {
    min-height: 130px;
    min-width: 100%;
  }
`;

export const carouselInteriorContainer = css`
  position: relative;
  height: 440px;
  margin: 0 32px 0 40px;
  @media ${breakpoints.small} {
    height: 150px;
    margin: 0 10px;
  }
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

export const carouselExteriorImage = css`
  width: 100%;
  height: 100%;
  object-fit: contain;
  @media ${breakpoints.small} {
    object-fit: cover;
  }
`;

export const carouselInteriorImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
  @media ${breakpoints.small} {
    object-fit: fill;
  }
`;

export const carouselNavigation = css`
  ${fontSizeMedium}
  display: flex;
  justify-content: center;
  margin: 40px auto 0;
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.regular};
  @media ${breakpoints.small} {
    ${fontSizeBase}
    margin: 20px auto 0;
  }
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
  img {
    background-color: transparent;
  }
`;
