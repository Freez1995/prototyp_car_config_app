import { css } from '@emotion/react';
import {
  fontSizeBase,
  fontSizeMicro,
  fontSizeSmall,
} from 'shared/styles/fonts';
import { breakpoints, colors, fontFamily } from 'shared/styles/variables';

export const inputRadioButton = css`
  display: none;
`;

export const radioButtonContainer = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-width: 100%;
  cursor: pointer;
`;

export const radioImageContainer = css`
  position: relative;
  margin-right: 20px;
`;

export const radioItemImage = css`
  border-radius: 50%;
  width: 60px;
  @media ${breakpoints.small} {
    width: 45px;
  }
`;

export const radioCheckedIcon = css`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
`;

export const uncheckedItem = css`
  ${radioCheckedIcon}
  opacity: 0;
`;

export const checkedItem = css`
  ${radioCheckedIcon}
  opacity: 1;
`;

export const radioTextContainer = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${fontFamily.inter};
`;

export const radioItemName = css`
  ${fontSizeBase}
  color: ${colors.textPrimaryDarkest};
  margin-bottom: 4px;
  @media ${breakpoints.small} {
    ${fontSizeSmall}
  }
`;

export const radioItemPrice = css`
  ${fontSizeSmall}
  color: ${colors.textPrimaryDark};
  @media ${breakpoints.small} {
    ${fontSizeMicro}
  }
`;
