import { css } from '@emotion/react';
import { fontSizeMedium, fontSizeXXLarge } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const summaryWrapper = css`
  padding: 40px 156px;
`;

export const summaryHeadingContainer = css`
  display: grid;
  row-gap: 16px;
  margin-bottom: 40px;
  text-align: center;
  color: ${colors.textPrimaryDarkest};
`;

export const summaryHeadingText = css`
  ${fontSizeXXLarge}
  font-family: Aeonik;
  font-weight: ${fontWeight.bold};
`;

export const summarySubheadingText = css`
  ${fontSizeMedium}
  font-family: ${fontFamily.inter};
`;
