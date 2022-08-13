import { css } from '@emotion/react';
import { small, tiny } from './fonts';
import { boxShadow, colors, fontFamily, fontWeight } from './variables';

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
  &:hover {
    background-color: ${colors.backgroundPrimaryDarker};
  }
  &:active {
    box-shadow: ${boxShadow.shadowItemClicked};
  }
`;

export const configureCarLinkHidden = css`
  display: none;
`;

export const dropdownItem = css`
  ${small}
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.regular};
  color: ${colors.globalPrimary};
  padding: 16px 25px;
  &:hover {
    background-color: ${colors.globalPrimaryLight};
    color: ${colors.white};
  }
`;

export const dropdownItemLink = css`
  ${dropdownItem}
  border-bottom: 1px solid ${colors.borderPrimaryLighter};
`;

export const dropdownItemButton = css`
  ${dropdownItem}
  background-color: transparent;
  padding: 16px 25px;
  border: none;
  text-align: start;
`;
