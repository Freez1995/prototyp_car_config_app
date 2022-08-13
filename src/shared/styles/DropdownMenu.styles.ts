import { css } from '@emotion/react';
import { small } from './fonts';
import { boxShadow, colors } from './variables';

export const dropdownContainer = css`
  ${small}
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: ${colors.white};
  box-shadow: ${boxShadow.shadowPrimary};
`;

export const headerDropdown = css`
  ${dropdownContainer}
  right: -40px;
  top: 60px;
`;

export const carConfigDropdown = css`
  ${dropdownContainer}
  min-width: 200px;
  right: 0px;
  top: 30px;
`;

export const dropdownHidden = css`
  display: none;
`;

export const dotsDropdown = css`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0 6px;
  margin: 10px 6px 0 0;
`;

export const hamburgerDropdown = css`
  display: flex;
  align-items: center;
  cursor: pointer;
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
