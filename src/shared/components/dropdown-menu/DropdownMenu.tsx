/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React from 'react';
import * as styles from 'shared/styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'mainMenuDropdown' | 'carConfigDropdown';
  extraStyles?: SerializedStyles;
  children: React.ReactNode;
  isToggled: boolean;
}

export const DropdownMenu: React.FC<Props> = ({
  type,
  extraStyles,
  children,
  isToggled,
  ...rest
}) => {
  return isToggled ? (
    <div css={[styles[type], extraStyles]} {...rest}>
      {children}
    </div>
  ) : null;
};
