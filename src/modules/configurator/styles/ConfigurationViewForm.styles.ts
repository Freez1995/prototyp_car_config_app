import { css } from '@emotion/react';
import { fontSizeBase, fontSizeSmall } from 'shared/styles/fonts';
import { breakpoints, colors, fontFamily } from 'shared/styles/variables';

export const contentWrapper = css`
  padding: 40px 156px;
  @media ${breakpoints.small} {
    padding: 40px 20px;
  }
`;

export const configurationOptions = css`
  @media ${breakpoints.small} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const editConfiguration = css`
  ${fontSizeBase}
  font-family: ${fontFamily.inter};
  color: ${colors.globalPrimary};
  margin-right: 40px;
  @media ${breakpoints.small} {
    ${fontSizeSmall}
    margin: 0 0 5px 0;
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
