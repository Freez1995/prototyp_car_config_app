/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import * as styles from '../styles/DropdownMenu.styles';
import dots from 'assets/home/dots.svg';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: 'headerDropdown' | 'carConfigDropdown';
  children: React.ReactNode;
}

export const DropdownMenu: React.FC<Props> = ({ type, children, ...rest }) => {
  const [isToggled, setIsToggled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleToggleDropdown() {
    setIsToggled(!isToggled);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      e.target instanceof Element &&
      isToggled &&
      !dropdownRef.current?.contains(e.target)
    )
      setIsToggled(false);
  };

  window.addEventListener('click', handleClickOutside, { passive: false });

  return (
    <div
      css={
        type === 'headerDropdown'
          ? styles.hamburgerDropdown
          : styles.dotsDropdown
      }
      onClick={handleToggleDropdown}
      ref={dropdownRef}
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
    </div>
  );
};
