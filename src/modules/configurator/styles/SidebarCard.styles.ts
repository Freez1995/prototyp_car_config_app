import { css } from '@emotion/react';
import { base, micro } from 'shared/styles/fonts';
import { colors, fontFamily } from 'shared/styles/variables';

export const buttonContainer = css`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  background-color: transparent;
  border: none;
  align-items: center;
`;

export const imageContainer = css`
  position: relative;
  height: 60px;
`;

export const itemImage = css`
  width: 60px;
  border-radius: 50%;
`;

export const checkedIcon = css`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${fontFamily.inter};
`;

export const itemName = css`
  ${base}
  color: ${colors.textPrimaryDarkest};
  margin-bottom: 4px;
`;

export const itemType = css`
  ${micro}
  letter-spacing: 2px;
  color: ${colors.textPrimaryDark};
`;
