import { css } from '@emotion/react';
import { boxShadow, colors } from 'shared/styles';

export const formContainer = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const form = css`
  width: 350px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 5px;
  hr {
    height: 2px;
    background-color: ${colors.backgroundPrimaryLighter};
    border: none;
    margin: 10px 0;
  }
  h1 {
    margin: 0 0 10px;
  }
`;

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const inputLabel = css`
  font-size: 18px;
  font-weight: bold;
  padding: 5px 0;
`;

export const input = css`
  padding: 8px;
  border: 2px solid ${colors.borderPrimaryLight};
  border-radius: 5px;
  outline: none;
`;

export const inputValid = css`
  ${input}
  &:hover {
    border-color: ${colors.globalPrimary};
  }
  &:focus {
    border-color: ${colors.globalPrimary};
    box-shadow: 0 0 2px ${colors.globalPrimary};
  }
`;

export const inputInvalid = css`
  ${input}
  border-color: ${colors.utilityErrorLight};
  &:focus {
    border-color: ${colors.utilityErrorLight};
    box-shadow: 0 0 2px ${colors.utilityErrorLight};
  }
`;

export const checkboxContainer = css`
  display: flex;
  margin: 10px 0 0;
  input {
    cursor: pointer;
    width: 15px;
    margin-right: 5px;
  }
`;

export const formButton = css`
  width: 100%;
  margin: 20px 0;
  padding: 10px 0;
  font-size: 18px;
  color: white;
  background-color: ${colors.globalPrimary};
  border: 1px solid ${colors.globalPrimary};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:active {
    box-shadow: ${boxShadow.shadowItemClicked};
  }
  &:disabled {
    pointer-events: none;
  }
`;

export const redirectContainer = css`
  text-align: center;
  a {
    display: flex;
    justify-content: center;
    color: ${colors.globalPrimary};
  }
  img {
    width: 18px;
    margin-right: 5px;
  }
`;

export const errorForm = css`
  li {
    display: flex;
    margin: 5px 0;
    padding: 5px;
    background-color: hsl(0, 80%, 96%);
    color: hsl(2, 21%, 46%);
    font-size: 14px;
    p {
      margin-right: 8px;
    }
  }
  img {
    width: 15px;
    margin: 0 8px;
  }
`;
