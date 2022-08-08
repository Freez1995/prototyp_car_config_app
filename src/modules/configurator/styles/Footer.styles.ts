import { css } from '@emotion/react';
import { base, carDescriptionBase } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const footer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  background-color: ${colors.backgroundPrimaryLightest};
  border-top: 1px solid ${colors.borderPrimaryLight};
`;

export const footerCarDetails = css`
  ${carDescriptionBase}
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-family: ${fontFamily.opticianSans};
`;

export const footerCarYear = css`
  color: ${colors.textPrimaryDark};
  margin-right: 12px;
`;

export const footerCarModel = css`
  color: ${colors.textPrimaryDarkest};
`;

export const saveConfigContainer = css`
  display: flex;
  align-items: center;
`;

export const footerButton = css`
  ${base}
  padding: 28px 74px 28px 95px;
  margin-left: 32px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLightest};
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.bold};
  border: none;
`;
