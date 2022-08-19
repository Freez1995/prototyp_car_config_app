import { css } from '@emotion/react';
import {
  fontSizeMicro,
  fontSizeSmall,
  fontSizeTiny,
} from 'shared/styles/fonts';
import {
  breakpoints,
  colors,
  fontFamily,
  fontWeight,
} from 'shared/styles/variables';

export const cardContainer = css`
  display: grid;
  grid-template-columns: auto 16px;
  max-width: 1128px;
  max-height: 180px;
  background-color: ${colors.backgroundPrimaryLightest};
  margin: 0 auto;
  padding: 20px 26px 25px 40px;
  @media ${breakpoints.small} {
    display: block;
    position: relative;
    min-width: 100%;
    max-height: 100%;
    padding: 0 15px;
  }
`;

export const cardContentContainer = css`
  display: flex;
  align-items: flex-end;
  @media ${breakpoints.small} {
    flex-direction: column;
    height: fit-content;
  }
`;

export const dropdownContainer = css`
  position: relative;
  @media ${breakpoints.small} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const imageContainer = css`
  width: 420px;
  height: 135px;
  @media ${breakpoints.small} {
    width: 100%;
    padding: 10px;
  }
`;

export const carImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media ${breakpoints.small} {
    object-fit: cover;
  }
`;

export const carInfoContainer = css`
  display: flex;
  max-height: 120px;
  flex-direction: column;
  font-weight: ${fontWeight.regular};
  padding-left: 28px;
  border-left: 1px solid ${colors.borderPrimaryLight};
  @media ${breakpoints.small} {
    border-top: 1px solid ${colors.borderPrimaryLight};
    border-left: none;
    width: 100%;
    padding: 10px 0;
  }
`;

export const carYearText = css`
  ${fontSizeMicro}
  letter-spacing: 2px;
  color: ${colors.textPrimaryDark};
`;

export const carNameText = css`
  font-family: ${fontFamily.opticianSans};
  color: ${colors.globalPrimary};
  font-weight: ${fontWeight.regular};
  font-size: 36px;
  line-height: 32px;
  letter-spacing: -2px;
`;

export const carColorText = css`
  ${fontSizeMicro}
  letter-spacing: 2px;
  color: ${colors.textPrimaryDarker};
  margin-top: 8px;
  margin-bottom: 32px;
  @media ${breakpoints.small} {
    margin-bottom: 10px;
  }
`;

export const carDateText = css`
  ${fontSizeTiny}
  color: ${colors.textPrimary};
`;

export const dropdownItem = css`
  ${fontSizeSmall}
  border: none;
  background-color: transparent;
  padding: 16px 24px;
  text-align: start;
  &:hover {
    background-color: ${colors.globalPrimaryLight};
    color: ${colors.white};
  }
`;

export const dropdownButtonEdit = css`
  ${dropdownItem}
  color: ${colors.globalPrimary};
  border-bottom: 1px solid ${colors.borderPrimaryLighter};
`;

export const dropdownButtonDelete = css`
  ${dropdownItem}
  color: ${colors.utilityErrorPrimary};
`;
