import { css } from '@emotion/react';
import {
  fontSizeCarDescriptionBase,
  fontSizeCarDescriptionSmall,
} from 'shared/styles/fonts';
import { breakpoints, colors, fontFamily } from 'shared/styles/variables';

export const navbar = css`
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.backgroundPrimaryLightest};
  border-bottom: 1px solid ${colors.borderPrimaryLight};
  @media ${breakpoints.small} {
    padding: 24px 10px;
    flex-direction: column;
    align-items: start;
  }
`;

export const backButton = css`
  ${fontSizeCarDescriptionBase}
  font-family: ${fontFamily.opticianSans};
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 12px;
  @media ${breakpoints.small} {
    ${fontSizeCarDescriptionSmall}
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
`;

export const navbarTextContainer = css`
  display: flex;
  @media ${breakpoints.small} {
    margin-left: 5px;
  }
`;

export const yearText = css`
  color: ${colors.textPrimary};
  margin-right: 12px;
`;

export const modelText = css`
  color: ${colors.textPrimaryDarkest};
`;
