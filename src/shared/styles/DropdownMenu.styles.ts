import { css } from '@emotion/react';
import { small } from './fonts';
import { colors } from './variables';

export const dropdownContainer = css`
  ${small}
  position: absolute;
  display: flex;
  flex-direction: column;
  width: max-content;
  background-color: ${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.06);
`;

export const mainMenuDropdown = css`
  ${dropdownContainer}
  right: -40px;
  top: 60px;
`;

export const carConfigDropdown = css`
  ${dropdownContainer}
  right: 0px;
  top: 4px;
`;
