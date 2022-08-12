import { css } from '@emotion/react';
import { micro, small, tiny } from 'shared/styles/fonts';
import { colors, fontFamily, fontWeight } from 'shared/styles/variables';

export const cardContainer = css`
  display: grid;
  grid-template-columns: auto 16px;
  max-width: 1128px;
  max-height: 180px;
  background-color: ${colors.backgroundPrimaryLightest};
  margin: 0 auto;
  padding: 20px 26px 25px 40px;
`;

export const cardContentContainer = css`
  display: flex;
  align-items: flex-end;
`;

export const dropdownContainer = css`
  position: relative;
`;

export const imageContainer = css`
  width: 420px;
  height: 135px;
`;

export const carImage = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const carInfoContainer = css`
  display: flex;
  max-height: 120px;
  flex-direction: column;
  font-weight: ${fontWeight.regular};
  padding-left: 28px;
  border-left: 1px solid ${colors.borderPrimaryLight};
`;

export const dotsButton = css`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: transparent;
  padding: 0 6px;
  margin: 10px 6px 0 0;
`;

export const carYearText = css`
  ${micro}
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
  ${micro}
  letter-spacing: 2px;
  color: ${colors.textPrimaryDarker};
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const carDateText = css`
  ${tiny}
  color: ${colors.textPrimary};
`;

export const dropdownButton = css`
  ${small}
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
  ${dropdownButton}
  color: ${colors.globalPrimary};
`;

export const dropdownButtonDelete = css`
  ${dropdownButton}
  color: ${colors.utilityErrorPrimary};
`;
