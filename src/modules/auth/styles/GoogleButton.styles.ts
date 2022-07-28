import { css } from '@emotion/react';
import { boxShadow } from 'shared/styles';

export const googleButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  padding: 3px 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  &:active {
    box-shadow: ${boxShadow.shadowItemClicked};
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const googleButtonIcon = css`
  width: 40px;
  margin-right: 10px;
`;
