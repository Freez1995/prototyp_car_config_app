import { css } from '@emotion/react';
import { base } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const linkContainer = css`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  align-items: center;
`;

export const linkContainerHidden = css`
  display: none;
`;

export const linkNumber = css`
  ${base}
  font-family: ${fontFamily.inter};
  color: ${colors.textPrimary};
`;

export const linkText = css`
  ${linkNumber}
  color: ${colors.textPrimaryDarkest};
`;

export const linkActive = css`
  ${linkNumber}
  font-weight: ${fontWeight.bold};
`;
