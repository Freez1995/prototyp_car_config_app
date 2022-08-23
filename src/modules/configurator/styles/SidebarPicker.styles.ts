import { css } from '@emotion/react';
import {
  fontSizeBase,
  fontSizeLarge,
  fontSizeMedium,
} from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const selectorSidebar = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0;
  height: 100%;
  background-color: ${colors.backgroundPrimaryLightest};
  border-left: 1px solid ${colors.borderPrimaryLight};
  transition: all 0.5s;
  overflow-x: hidden;
  @media ${breakpoints.small} {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    border: none;
  }
`;

export const selectorSidebarActive = css`
  width: 356px;
  height: 100%;
  @media ${breakpoints.medium} {
    width: 320px;
    height: 100%;
  }
  @media ${breakpoints.small} {
    width: 100%;
    height: 300px;
  }
`;

export const selectorSidebarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: max-content;
  flex: 1;
  padding: 24px 40px 0;
  @media ${breakpoints.small} {
    padding: 24px 20px;
  }
`;

export const sidebarContentContainer = css`
  display: flex;
  flex-direction: column;
`;

export const headingContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const headingText = css`
  ${fontSizeLarge}
  font-family: ${fontFamily.inter};
  color: ${colors.textPrimaryDarkest};
  &::first-letter {
    text-transform: capitalize;
  }
  @media ${breakpoints.small} {
    ${fontSizeMedium}
  }
`;

export const headingButton = css`
  background-color: transparent;
  border: none;
`;

export const headingButtonImage = css`
  &:hover {
    path {
      fill: ${colors.utilityErrorPrimary};
    }
  }
`;

export const selectorSidebarCard = css`
  & > :first-of-type {
    margin-top: 64px;
  }
  & > :nth-of-type(n + 2) {
    margin-top: 40px;
  }
  @media ${breakpoints.small} {
    & > :first-of-type {
      margin-top: 20px;
    }
    & > :nth-of-type(n + 2) {
      margin-top: 20px;
    }
  }
`;

export const doneButton = css`
  ${fontSizeBase}
  min-width: max-content;
  background-color: ${colors.globalPrimary};
  padding: 22px 0;
  margin-top: 24px;
  color: ${colors.textPrimaryLightest};
  font-weight: ${fontWeight.bold};
  border: none;
  @media ${breakpoints.small} {
    margin-top: 0;
    padding: 12px;
  }
`;
