import { css } from '@emotion/react';
import { base } from 'shared/styles/fonts';
import { colors, fontWeight } from 'shared/styles/variables';

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
`;

export const carouselSiderContainer = css`
  margin: auto;
  flex-grow: 1;
`;

export const sidebar = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 356px;
  background-color: ${colors.backgroundPrimaryLightest};
  border-left: 1px solid ${colors.borderPrimaryLight};
`;

export const sidebarContainer = css`
  padding: 40px;
  & > :nth-of-type(n + 2) {
    margin-top: 40px;
  }
`;

export const sidebarButton = css`
  ${base}
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  background-color: ${colors.globalPrimary};
  padding: 22px 0;
  margin-top: 24px;
  color: ${colors.textPrimaryLightest};
  font-weight: ${fontWeight.bold};
`;

export const buttonImage = css`
  margin-left: 8px;
  path {
    fill: ${colors.iconPrimaryLightest};
  }
`;
