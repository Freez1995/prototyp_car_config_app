import { css } from '@emotion/react';
import { fontSizeBase } from 'shared/styles/fonts';
import { colors, fontFamily } from 'shared/styles/variables';

export const contentWrapper = css`
  padding: 40px 156px;
`;

export const editConfiguration = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.globalPrimary};
  margin-right: 40px;
`;

export const deleteConfiguration = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.utilityErrorPrimary};
`;
