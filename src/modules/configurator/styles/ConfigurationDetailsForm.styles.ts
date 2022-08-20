import { css } from '@emotion/react';
import {
  fontSizeCarDescriptionBase,
  fontSizeCarDescriptionLarge,
  fontSizeCarDescriptionSmall,
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
} from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const carDescriptionContainer = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.borderPrimary};
  padding: 0 0 36px;
  margin-top: 92px;
  @media ${breakpoints.small} {
    margin-top: 40px;
    padding: 0 0 15px;
  }
`;

export const carName = css`
  ${fontSizeCarDescriptionLarge}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDarkest};
  @media ${breakpoints.small} {
    ${fontSizeCarDescriptionBase}
  }
`;

export const carYear = css`
  ${fontSizeCarDescriptionBase}
  font-family: ${fontFamily.opticianSans};
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDark};
  @media ${breakpoints.small} {
    ${fontSizeCarDescriptionSmall}
  }
`;

export const detailsContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media ${breakpoints.small} {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const detailsText = css`
  ${fontSizeLarge}
  color: ${colors.textPrimaryDarkest};
  font-weight: ${fontWeight.regular};
  @media ${breakpoints.small} {
    ${fontSizeMedium}
  }
`;

export const details = css`
  width: 664px;
  & > :nth-of-type(2) {
    margin-top: 60px;
  }
  & > :last-child {
    margin-top: 50px;
  }
  @media ${breakpoints.small} {
    margin-top: 15px;
    width: 100%;
    & > :nth-of-type(2) {
      margin-top: 20px;
    }
  }
`;

export const detailsInnerContainer = css`
  & > :nth-of-type(1):not(:first-child) {
    margin-top: 20px;
  }
  & > :nth-of-type(n + 2) {
    margin-top: 40px;
  }
  @media ${breakpoints.small} {
    & > :nth-of-type(n + 2) {
      margin-top: 25px;
    }
  }
`;

export const detailsHeading = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 0 20px;
  border-bottom: 1px solid ${colors.borderPrimaryLight};
  h2 {
    ${fontSizeLarge}
    color: ${colors.textPrimaryDarker};
    font-weight: ${fontWeight.regular};
  }
  @media ${breakpoints.small} {
    padding: 0 0 10px;
    h2 {
      ${fontSizeMedium};
    }
  }
`;

export const detailsHeadingLink = css`
  ${fontSizeSmall}
  color: ${colors.globalPrimary};
`;

export const detailsHeadingLinkHidden = css`
  display: none;
`;

export const totalPriceContainer = css`
  ${fontSizeLarge}
  display: flex;
  justify-content: space-between;
  font-weight: ${fontWeight.bold};
  color: ${colors.textPrimaryDarker};
  p:nth-of-type(2) {
    color: ${colors.textPrimaryDarkest};
  }
  @media ${breakpoints.small} {
    ${fontSizeMedium};
  }
`;
