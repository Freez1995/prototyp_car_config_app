import { css } from '@emotion/react';
import { fontSizeBase, fontSizeLarge } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

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
`;

export const selectorSidebarActive = css`
  width: 356px;
  height: 100%;
`;

export const selectorSidebarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: max-content;
  flex: 1;
  padding: 24px 40px 0;
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
`;
