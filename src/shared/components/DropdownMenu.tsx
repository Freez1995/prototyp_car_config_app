/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as styles from '../styles/DropdownMenu.styles';
import dots from 'assets/home/dots.svg';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'headerDropdown' | 'carConfigDropdown';
  children: React.ReactNode;
}

export const DropdownMenu: React.FC<Props> = ({ type, children, ...rest }) => {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggleDropdown() {
    setIsToggled(!isToggled);
  }

  function handleClickOutside() {
    setIsToggled(false);
  }

  return (
    <button
      css={
        type === 'headerDropdown' ? styles.hamburgerButton : styles.dotsDropdown
      }
      onClick={handleToggleDropdown}
      onBlur={handleClickOutside}
    >
      {type === 'headerDropdown' ? (
        <div
          css={
            isToggled
              ? styles.hamburgerButtonOpened
              : styles.hamburgerButtonClosed
          }
        />
      ) : (
        <img src={dots} />
      )}
      <div css={isToggled ? styles[type] : styles.dropdownHidden} {...rest}>
        {children}
      </div>
    </button>
  );
};
