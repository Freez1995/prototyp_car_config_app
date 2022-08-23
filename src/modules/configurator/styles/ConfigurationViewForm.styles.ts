import { css } from '@emotion/react';
import { fontSizeBase, fontSizeSmall } from 'shared/styles/fonts';
import { breakpoints, colors, fontFamily } from 'shared/styles/variables';

export const contentWrapper = css`
  padding: 40px 156px;
  @media ${breakpoints.medium} {
    padding: 60px 30px;
  }
  @media ${breakpoints.small} {
    padding: 40px 20px;
  }
`;

export const configurationOptions = css`
  @media ${breakpoints.small} {
    margin: 10px 0 0 5px;
  }
`;

export const editConfiguration = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.globalPrimary};
  margin-right: 40px;
  @media ${breakpoints.small} {
    ${fontSizeSmall}
    margin-right: 15px;
  }
`;

export const deleteConfiguration = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.utilityErrorPrimary};
  @media ${breakpoints.small} {
    ${fontSizeSmall}
  }
`;
