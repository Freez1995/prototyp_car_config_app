import { css } from '@emotion/react';
import { fontSizeBase, fontSizeCarDescriptionBase } from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const footer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
  background-color: ${colors.backgroundPrimaryLightest};
  border-top: 1px solid ${colors.borderPrimaryLight};
  @media ${breakpoints.small} {
    flex-direction: column;
    margin: 0;
  }
`;

export const footerCarDetails = css`
  ${fontSizeCarDescriptionBase}
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-family: ${fontFamily.opticianSans};
  @media ${breakpoints.medium} {
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
    align-items: flex-start;
  }
  @media ${breakpoints.small} {
    margin-top: 10px;
    margin-left: 20px;
    justify-content: center;
  }
`;

export const footerCarYear = css`
  color: ${colors.textPrimaryDark};
  margin-right: 12px;
`;

export const footerCarModel = css`
  color: ${colors.textPrimaryDarkest};
`;

export const saveConfigContainer = css`
  display: flex;
  align-items: center;
  @media ${breakpoints.small} {
    flex-direction: column;
    align-items: center;
  }
`;

export const footerButton = css`
  ${fontSizeBase}
  padding: 28px 74px 28px 95px;
  margin-left: 32px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLightest};
  font-family: ${fontFamily.inter};
  font-weight: ${fontWeight.bold};
  border: none;
  @media ${breakpoints.medium} {
    margin-left: 15px;
    padding: 20px 50px;
  }
  @media ${breakpoints.small} {
    padding: 18px;
    margin: 0;
    width: 100%;
    margin-top: 10px;
  }
`;
