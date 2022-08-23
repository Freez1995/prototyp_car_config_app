import { css } from '@emotion/react';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  fontSizeTiny,
} from 'shared/styles/fonts';
import { breakpoints, colors, fontWeight } from 'shared/styles/variables';

export const containerColumn = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  min-width: max-content;
`;

export const containerRow = css`
  display: grid;
  align-items: end;
  grid-template-columns: auto auto;
  column-gap: 56px;
  min-width: max-content;
  @media ${breakpoints.medium} {
    column-gap: 20px;
  }
  @media ${breakpoints.small} {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const priceFigure = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const priceFigureText = css`
  ${fontSizeSmall}
  margin-right: 8px;
  letter-spacing: 2px;
  color: ${colors.textPrimary};
  font-weight: ${fontWeight.regular};
  @media ${breakpoints.medium} {
    ${fontSizeTiny}
  }
`;

export const priceText = css`
  ${fontSizeLarge}
  color: ${colors.textPrimaryDarkest};
  @media ${breakpoints.medium} {
    ${fontSizeMedium}
  }
`;
