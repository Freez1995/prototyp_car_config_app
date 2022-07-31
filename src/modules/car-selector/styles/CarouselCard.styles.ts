import { css } from '@emotion/react';
import { carModelFont, carYearFont, small } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const card = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 32px;
  min-width: 548px;
  min-height: 600px;
  background-color: ${colors.backgroundPrimaryLightest};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 81%;
  }
`;

export const contentContainer = css`
  padding: 60px 40px 40px;
`;

export const carYearText = css`
  ${carYearFont}
  font-family: ${fontFamily.opticianSans};
  color: ${colors.textPrimaryDark};
`;

export const carModelText = css`
  ${carModelFont}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDarkest};
`;

export const cardButton = css`
  ${small}
  padding: 12px 39px;
  margin-top: 16px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLighter};
  font-weight: ${fontWeight.bold};
  border: none;
`;
