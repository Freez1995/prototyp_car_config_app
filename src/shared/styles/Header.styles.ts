import { css } from '@emotion/react';
import { small, tiny } from './fonts';
import { colors, fontFamily, fontWeight } from './variables';

export const header = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: ${colors.backgroundPrimaryDarkest};
  padding: 0 40px;
`;

export const navbar = css`
  display: flex;
  align-items: center;
  position: relative;
`;

export const configureCarLink = css`
  ${tiny}
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.inter};
  border: 1px solid ${colors.borderPrimaryDarker};
  color: ${colors.textPrimaryLighter};
  padding: 8px 16px;
`;

export const hamburgerButton = css`
  width: 40px;
  height: 40px;
  border: none;
  margin-left: 40px;
  background-color: transparent;
`;

export const hamburgerTopLine = css`
  width: 40px;
  height: 3px;
  background-color: ${colors.white};
  border-radius: 3px;
  margin-bottom: 6px;
  transition: all 0.3s ease-in-out;
`;

export const hamburgerBottomLine = css`
  width: 32px;
  height: 3px;
  border-radius: 3px;
  background-color: ${colors.white};
  transition: all 0.3s ease-in-out;
`;

export const hamburgerButtonClosed = css`
  display: flex;
  flex-direction: column;
  &:before {
    content: '';
    ${hamburgerTopLine}
  }
  &:after {
    content: '';
    ${hamburgerBottomLine}
  }
`;

export const hamburgerButtonOpened = css`
  position: absolute;
  &:before {
    content: '';
    ${hamburgerBottomLine}
    margin: 0;
    position: absolute;
    transform: rotate(-45deg);
  }
  &:after {
    content: '';
    ${hamburgerBottomLine}
    margin: 0;
    position: absolute;
    transform: rotate(45deg);
  }
`;

export const dropdownItemLink = css`
  ${small}
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.regular};
  color: ${colors.globalPrimary};
  padding: 16px 25px;
  border-bottom: 1px solid ${colors.borderPrimaryLighter};
`;

export const dropdownItemButton = css`
  ${small}
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.regular};
  color: ${colors.globalPrimary};
  background-color: transparent;
  padding: 16px 25px;
  border: none;
  text-align: start;
`;
