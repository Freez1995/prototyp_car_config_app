/** @jsxImportSource @emotion/react */
import React from 'react';
import * as styles from '../styles/DropdownMenu.styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'mainMenuDropdown' | 'carConfigDropdown';
  children: React.ReactNode;
  isToggled: boolean;
}

export const DropdownMenu: React.FC<Props> = ({
  type,
  children,
  isToggled,
  ...rest
}) => {
  return isToggled ? (
    <div css={styles[type]} {...rest}>
      {children}
    </div>
  ) : null;
};
