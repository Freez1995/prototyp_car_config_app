import { css } from '@emotion/react';
import { fontSizeBase, fontSizeTiny } from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const linkContainer = css`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  align-items: center;
  @media ${breakpoints.small} {
    column-gap: 10px;
  }
`;

export const linkContainerHidden = css`
  display: none;
`;

export const linkNumber = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.textPrimary};
  @media ${breakpoints.small} {
    ${fontSizeTiny}
  }
`;

export const linkText = css`
  ${linkNumber}
  color: ${colors.textPrimaryDarkest};
`;

export const linkActive = css`
  ${linkNumber}
  font-weight: ${fontWeight.bold};
`;
