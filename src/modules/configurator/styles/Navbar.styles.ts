import { css } from '@emotion/react';
import { carDescriptionBase } from 'shared/styles/fonts';
import { colors, fontFamily } from 'shared/styles/variables';

export const navbar = css`
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundPrimaryLightest};
  border-bottom: 1px solid ${colors.borderPrimaryLight};
`;

export const backButton = css`
  ${carDescriptionBase}
  font-family: ${fontFamily.opticianSans};
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  column-gap: 12px;
  background-color: transparent;
  border: none;
`;

export const yearText = css`
  color: ${colors.textPrimary};
`;

export const modelText = css`
  color: ${colors.textPrimaryDarkest};
`;
