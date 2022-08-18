import { css } from '@emotion/react';
import { fontSizeMedium } from 'shared/styles/fonts';
import { colors, fontWeight } from 'shared/styles/variables';

export const detailsCard = css`
  ${fontSizeMedium}
  display: flex;
  justify-content: space-between;
  font-weight: ${fontWeight.regular};
  align-items: center;
`;

export const detailsFigure = css`
  display: flex;
  align-items: center;
`;

export const detailsFigureImage = css`
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const detailsFigureText = css`
  color: ${colors.textPrimaryDarkest};
`;

export const detailsPriceText = css`
  color: ${colors.textPrimaryDark};
`;
