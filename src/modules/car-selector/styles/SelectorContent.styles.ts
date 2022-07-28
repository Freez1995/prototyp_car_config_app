import { css } from '@emotion/react';
import { colors, fontFamily, fontWeight, large, small } from 'shared/styles';

export const contentWrapper = css`
  padding-left: 156px;
`;

export const textSection = css`
  margin: 80px 0 60px;
`;

export const headingText = css`
  ${large}
  font-family: ${fontFamily.inter};
  color: ${colors.textPrimaryDarkest};
  font-weight: ${fontWeight.regular};
  margin: 0 0 16px;
`;
export const subheadingText = css`
  ${small}
  color: ${colors.textPrimaryDark}
`;
