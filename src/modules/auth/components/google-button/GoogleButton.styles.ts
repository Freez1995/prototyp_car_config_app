import { css } from '@emotion/react';

export const googleButton = css`
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  margin: 10px 0;
  padding: 3px 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  &:active {
    box-shadow: inset 1px 1px 8px #333;
  }
`;

export const googleButtonIcon = css`
  width: 40px;
`;
