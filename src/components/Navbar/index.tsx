import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';
import IconChevronDown from '@/src/components/Icons/IcChevronDown.svg';
import style from '@/src/components/Navbar/style';
import { css } from '@emotion/react';
import MEDIA_QUERIES from '@/src/themes/mediaQueries';
import COLORS from '@/src/themes/colors';
import { ANIMATION_DURATION } from '@/src/themes/animation';

export type TNavbarItemProps = {
  name: string;
  onClick: () => void;
};

const NavBarItem: FC<TNavbarItemProps> = (props) => {
  const { name, onClick } = props;

  return (
    <li css={style.navbarItem} key={name}>
      <button
        type="button"
        onClick={onClick}
        data-testid={`navbar-item-${name}`}
      >
        {name}
      </button>
    </li>
  );
};

export type TNavbarProps = {
  items: TNavbarItemProps[];
};

const Navbar: FC<TNavbarProps> = (props) => {
  const { items } = props;
  const [isShowNavbarDropdown, setIsShowNavbarDropdown] = useState(false);

  return (
    <nav css={style.navbarContainer}>
      <div css={style.toggleContainer}>
        <Link css={style.brand} href="/">
          Cliff Su
        </Link>
        <button
          css={css`
            display: none;
            border: none;
            background-color: inherit;

            @media (${MEDIA_QUERIES.MOBILE}) {
              display: block;
              cursor: pointer;

              svg {
                width: 25px;
                height: 25px;
                color: ${COLORS.BLACK_050};
                transform: rotate(${isShowNavbarDropdown ? '180deg' : '0'});
                transition: transform ${ANIMATION_DURATION} ease;
              }
            }
          `}
          onClick={() => setIsShowNavbarDropdown((prev) => !prev)}
          aria-label="Navbar Toggle Button"
        >
          <IconChevronDown />
        </button>
      </div>
      <ul css={style.navbarItemContainer}>
        {items.map((item) => (
          <NavBarItem
            key={item.name}
            name={item.name}
            onClick={() => {
              setIsShowNavbarDropdown(false);
              item.onClick();
            }}
          />
        ))}
      </ul>
      <CSSTransition in={isShowNavbarDropdown} timeout={300} unmountOnExit>
        <ul css={style.navbarItemDropdownContainer}>
          {items.map((item) => {
            return (
              <NavBarItem
                key={item.name}
                name={item.name}
                onClick={() => {
                  setIsShowNavbarDropdown(false);
                  item.onClick();
                }}
              />
            );
          })}
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
