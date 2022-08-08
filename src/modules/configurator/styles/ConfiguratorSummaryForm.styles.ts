import { css } from '@emotion/react';
import { medium, xxLarge } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const summaryWrapper = css`
  padding: 40px 176px;
`;
export const summaryHeadingContainer = css`
  display: grid;
  row-gap: 16px;
  margin-bottom: 40px;
  text-align: center;
  color: ${colors.textPrimaryDarkest};
`;

export const summaryHeadingText = css`
  ${xxLarge}
  font-family: Aeonik;
  font-weight: ${fontWeight.bold};
`;

export const summarySubheadingText = css`
  ${medium}
  font-family: ${fontFamily.inter};
`;
