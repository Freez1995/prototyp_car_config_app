import { css } from '@emotion/react';
import { colors } from 'shared';

export const formContainer = css`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const form = css`
  width: 350px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 5px;
  hr {
    height: 2px;
    background-color: #ebebeb;
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
  border: 2px solid #ebebeb;
  border-radius: 5px;
  outline: none;
`;

export const inputValid = css`
  ${input}
  &:hover {
    border-color: #3f3fe4;
  }
  &:focus {
    border-color: #3f3fe4;
    box-shadow: 0 0 2px #3f3fe4;
  }
`;

export const inputInvalid = css`
  ${input}
  border: 2px solid #ea8888;
  &:focus {
    border-color: #ea8888;
    box-shadow: 0 0 2px #ea8888;
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
  background-color: #3f3fe4;
  border: 1px solid #3f3fe4;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:active {
    box-shadow: inset 1px 1px 8px #333;
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
    color: #3f3fe4;
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
    background-color: #fdeded;
    color: #8f605e;
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
