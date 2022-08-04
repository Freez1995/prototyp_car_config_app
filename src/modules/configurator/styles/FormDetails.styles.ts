import { css } from '@emotion/react';
import {
  carDescriptionBase,
  carDescriptionLarge,
  large,
  small,
} from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const carDescriptionContainer = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.borderPrimary};
  padding: 0 0 36px;
  margin-top: 92px;
`;

export const carName = css`
  ${carDescriptionLarge}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDarkest};
`;

export const carYear = css`
  ${carDescriptionBase}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDark};
`;

export const detailsContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export const detailsText = css`
  ${large}
  color: ${colors.textPrimaryDarkest};
`;

export const details = css`
  width: 664px;
  & > :nth-of-type(2) {
    margin-top: 60px;
  }
  & > :last-child {
    margin-top: 50px;
  }
`;

export const detailsInnerContainer = css`
  & > :nth-of-type(1):not(:first-child) {
    margin-top: 20px;
  }
  & > :nth-of-type(n + 2) {
    margin-top: 40px;
  }
`;

export const detailsHeading = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 0 20px;
  border-bottom: 1px solid ${colors.borderPrimaryDark};
  h2 {
    ${large}
    color: ${colors.textPrimaryDarker};
    font-weight: ${fontWeight.regular};
  }
`;

export const detailsHeadingLink = css`
  ${small}
  color: ${colors.globalPrimary};
`;

export const detailsHeadingLinkHidden = css`
  display: none;
`;

export const totalPriceContainer = css`
  ${large}
  display: flex;
  justify-content: space-between;
  font-weight: ${fontWeight.bold};
  color: ${colors.textPrimaryDarker};
  p:nth-of-type(2) {
    color: ${colors.textPrimaryDarkest};
  }
`;
