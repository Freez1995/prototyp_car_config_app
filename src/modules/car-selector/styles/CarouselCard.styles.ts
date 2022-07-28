import { css } from '@emotion/react';
import { colors, fontFamily, fontWeight, small } from 'shared/styles';

export const card = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-right: 32px;
  min-width: 548px;
  min-height: 600px;
  background-color: ${colors.backgroundPrimaryLightest};
  img {
    position: absolute;
    top: 0;
    right: -115px;
    height: 364px;
  }
`;

export const contentContainer = css`
  padding: 60px 40px 40px;
`;

export const carYearText = css`
  font-family: ${fontFamily.opticianSans};
  font-size: 28px;
  line-height: 32px;
  color: ${colors.textPrimaryDark};
  letter-spacing: -2px;
`;

export const carNameText = css`
  font-family: ${fontFamily.opticianSans};
  font-size: 48px;
  line-height: 44px;
  letter-spacing: -2px;
  font-weight: ${fontWeight.regular};
  color: ${colors.textPrimaryDarkest};
`;

export const cardButton = css`
  ${small}
  padding: 12px 39px;
  margin-top: 16px;
  background-color: ${colors.globalPrimary};
  color: ${colors.textPrimaryLighter};
  font-weight: ${fontWeight.bold};
  border: none;
`;
