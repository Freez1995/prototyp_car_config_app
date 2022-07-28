import { css } from '@emotion/react';
import {
  boxShadow,
  colors,
  fontFamily,
  fontWeight,
  large,
  medium,
  small,
} from 'shared/styles';

export const contentWrapper = css`
  padding: 0 156px;
`;

export const headingContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 76px;
  font-family: ${fontFamily.inter};
`;

export const headingText = css`
  ${large}
  color: ${colors.textPrimaryDarkest};
  font-weight: ${fontWeight.regular};
`;

export const headingLink = css`
  ${small}
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
`;

export const emptyStateContainer = css`
  ${medium}
  margin-top: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    opacity: 0.1;
    margin-bottom: 24px;
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
