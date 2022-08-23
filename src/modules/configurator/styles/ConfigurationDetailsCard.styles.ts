import { css } from '@emotion/react';
import { fontSizeBase, fontSizeMedium } from 'shared/styles/fonts';
import { breakpoints, colors, fontWeight } from 'shared/styles/variables';

export const detailsCard = css`
  ${fontSizeMedium}
  display: flex;
  justify-content: space-between;
  font-weight: ${fontWeight.regular};
  align-items: center;
  @media ${breakpoints.small} {
    ${fontSizeBase}
  }
`;

export const detailsFigure = css`
  display: flex;
  align-items: center;
`;

export const detailsFigureImage = css`
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
  @media ${breakpoints.small} {
    width: 45px;
    margin-right: 10px;
  }
`;
export const detailsFigureText = css`
  color: ${colors.textPrimaryDarkest};
`;

export const detailsPriceText = css`
  color: ${colors.textPrimaryDark};
`;
