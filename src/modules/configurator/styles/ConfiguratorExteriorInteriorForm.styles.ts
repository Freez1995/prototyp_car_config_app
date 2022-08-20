import { css } from '@emotion/react';
import { fontSizeBase } from 'shared/styles/fonts';
import { breakpoints, colors, fontWeight } from 'shared/styles/variables';

export const configurationContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const contentContainer = css`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  @media ${breakpoints.small} {
    flex-direction: column;
  }
`;

export const carouselSiderContainer = css`
  margin: auto;
  flex-grow: 1;
  @media ${breakpoints.small} {
    margin: 60px 0;
    flex: 0;
  }
`;

export const sidebar = css`
  display: flex;
  flex-direction: column;
  min-width: 356px;
  background-color: ${colors.backgroundPrimaryLightest};
  border-left: 1px solid ${colors.borderPrimaryLight};
  @media ${breakpoints.small} {
    min-width: 100px;
    border: none;
  }
`;

export const sidebarContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 0;
  flex-grow: 1;
  @media ${breakpoints.small} {
    padding: 24px 20px;
  }
`;

export const sidebarItemContainer = css`
  & > :nth-of-type(n + 2) {
    margin-top: 40px;
  }
  @media ${breakpoints.small} {
    & > :nth-of-type(n + 2) {
      margin-top: 20px;
    }
  }
`;

export const sidebarButton = css`
  ${fontSizeBase}
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  background-color: ${colors.globalPrimary};
  padding: 22px 0;
  margin-top: 24px;
  color: ${colors.textPrimaryLightest};
  font-weight: ${fontWeight.bold};
  @media ${breakpoints.small} {
    margin-top: 0;
    padding: 18px 0;
  }
`;

export const buttonImage = css`
  margin-left: 8px;
  path {
    fill: ${colors.iconPrimaryLightest};
  }
`;
