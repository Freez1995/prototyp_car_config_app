import { css } from '@emotion/react';
import { large, small } from 'shared/styles/fonts';
import { colors, fontWeight } from 'shared/styles/variables';

export const containerColumn = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const containerRow = css`
  display: grid;
  align-items: flex-end;
  grid-template-columns: auto auto;
  column-gap: 56px;
`;

export const priceFigure = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const priceFigureText = css`
  ${small}
  margin-right: 8px;
  letter-spacing: 2px;
  color: ${colors.textPrimary};
  font-weight: ${fontWeight.regular};
`;

export const priceText = css`
  ${large}
  color: ${colors.textPrimaryDarkest};
`;
