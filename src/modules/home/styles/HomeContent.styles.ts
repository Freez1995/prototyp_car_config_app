import { css } from '@emotion/react';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeMicro,
  fontSizeSmall,
} from 'shared/styles/fonts';
import {
  boxShadow,
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const contentWrapper = css`
  padding: 0 156px;
  @media ${breakpoints.small} {
    padding: 0 20px;
  }
`;

export const headingContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 76px;
  font-family: ${fontFamily.inter};
  @media ${breakpoints.small} {
    margin-top: 50px;
  }
`;

export const headingText = css`
  ${fontSizeLarge}
  color: ${colors.textPrimaryDarkest};
  font-weight: ${fontWeight.regular};
  @media ${breakpoints.small} {
    ${fontSizeMedium};
    width: min-content;
  }
`;

export const headingLink = css`
  ${fontSizeSmall}
  padding: 12px 20px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLighter};
  font-weight: ${fontWeight.bold};
  &:hover {
    background-color: ${colors.globalPrimaryLight};
  }
  &:active {
    background-color: ${colors.globalPrimary};
    box-shadow: ${boxShadow.shadowItemClicked};
  }
  @media ${breakpoints.small} {
    ${fontSizeMicro};
    padding: 12px 20px;
  }
`;

export const emptyStateContainer = css`
  ${fontSizeMedium}
  margin-top: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    opacity: 0.1;
    margin-bottom: 24px;
  }
  @media ${breakpoints.small} {
    ${fontSizeSmall};
    overflow: hidden;
    margin-top: 90px;
  }
`;

export const text = css`
  color: ${colors.textPrimaryDark};
  font-weight: ${fontWeight.regular};
`;

export const textLink = css`
  color: ${colors.globalPrimary};
  font-weight: ${fontWeight.bold};
  &:hover {
    color: ${colors.globalPrimaryLighter};
  }
`;

export const savedConfigurationCards = css`
  & > :first-of-type {
    margin-top: 48px;
    margin-bottom: 28px;
  }
  & > :nth-of-type(n + 2) {
    margin-bottom: 28px;
  }
`;
