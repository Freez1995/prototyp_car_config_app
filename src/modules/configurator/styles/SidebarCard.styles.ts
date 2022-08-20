import { css } from '@emotion/react';
import {
  fontSizeBase,
  fontSizeMicro,
  fontSizeSmall,
} from 'shared/styles/fonts';
import { breakpoints, colors, fontFamily } from 'shared/styles/variables';

export const buttonContainer = css`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  background-color: transparent;
  border: none;
  align-items: center;
  @media ${breakpoints.small} {
    column-gap: 10px;
    flex-grow: 1;
  }
`;

export const imageContainer = css`
  position: relative;
  height: 60px;
  @media ${breakpoints.small} {
    height: 45px;
  }
`;

export const itemImage = css`
  width: 60px;
  border-radius: 50%;
  @media ${breakpoints.small} {
    width: 45px;
  }
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
  ${fontSizeBase}
  color: ${colors.textPrimaryDarkest};
  margin-bottom: 4px;
  @media ${breakpoints.small} {
    ${fontSizeSmall}
  }
`;

export const itemType = css`
  ${fontSizeMicro}
  letter-spacing: 2px;
  color: ${colors.textPrimaryDark};
`;
