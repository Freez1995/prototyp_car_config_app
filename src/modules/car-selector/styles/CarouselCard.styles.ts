import { css } from '@emotion/react';
import {
  fontSizeCarDescriptionBase,
  fontSizeCarDescriptionLarge,
  fontSizeMicro,
  fontSizeSmall,
} from 'shared/styles/fonts';
import {
  boxShadow,
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const card = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 32px;
  min-width: 548px;
  min-height: 600px;
  background-color: ${colors.backgroundPrimaryLightest};
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 81%;
  }
  @media ${breakpoints.medium} {
    min-width: 450px;
    min-height: 500px;
    margin-bottom: 40px;
    img {
      height: 400px;
      object-position: 66%;
    }
  }
  @media ${breakpoints.small} {
    min-width: 250px;
    min-height: 300px;
    margin-bottom: 40px;
    img {
      height: 200px;
      object-position: 70%;
    }
  }
`;

export const contentContainer = css`
  padding: 60px 40px 40px;
  @media ${breakpoints.small} {
    padding: 40px 10px 20px;
  }
`;

export const carYearText = css`
  ${fontSizeCarDescriptionBase}
  font-family: ${fontFamily.opticianSans};
  color: ${colors.textPrimaryDark};
`;

export const carModelText = css`
  ${fontSizeCarDescriptionLarge}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDarkest};
  @media ${breakpoints.small} {
    ${fontSizeCarDescriptionBase}
  }
`;

export const cardButton = css`
  ${fontSizeSmall}
  padding: 12px 39px;
  margin-top: 16px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLighter};
  font-weight: ${fontWeight.bold};
  border: none;
  &:hover {
    background-color: ${colors.globalPrimaryLight};
  }
  &:active {
    background-color: ${colors.globalPrimary};
    box-shadow: ${boxShadow.shadowItemClicked};
  }
  @media ${breakpoints.small} {
    ${fontSizeMicro}
  }
`;
