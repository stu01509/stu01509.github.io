import { ANIMATION_DURATION } from '@/src/themes/animation';
import COLORS from '@/src/themes/colors';
import MEDIA_QUERIES from '@/src/themes/mediaQueries';
import { css } from '@emotion/react';

const navbarStyle = {
  navbarContainer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 72px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    @media (${MEDIA_QUERIES.TABLET}) {
      padding: 16px 32px;
    }

    @media (${MEDIA_QUERIES.MOBILE}) {
      display: block;
      padding: 12px 16px;
    }
  `,
  toggleContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  brand: css`
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 3px;
    text-decoration: none;
    color: ${COLORS.BLACK_090};
  `,
  navbarItemContainer: css`
    display: flex;
    font-size: 16px;

    @media (${MEDIA_QUERIES.MOBILE}) {
      display: none;
    }
  `,
  navbarItemDropdownContainer: css`
    display: none;

    @media (${MEDIA_QUERIES.MOBILE}) {
      display: block;
      margin: 8px 0;

      &.enter {
        opacity: 0;
      }
      &.enter-active {
        opacity: 1;
        transition: opacity ${ANIMATION_DURATION};
      }
      &.exit {
        opacity: 1;
      }
      &.exit-active {
        opacity: 0;
        transition: opacity ${ANIMATION_DURATION};
      }
    }
  `,
  navbarItem: css`
    margin: 0 12px;

    @media (${MEDIA_QUERIES.TABLET}) {
      margin: 0 8px;
    }

    @media (${MEDIA_QUERIES.MOBILE}) {
      margin: 12px 0;
    }

    button {
      width: 100%;
      text-align: left;
      cursor: pointer;
      border: none;
      background: inherit;
      color: ${COLORS.BLACK_050};
      padding: 0;

      &:hover {
        color: ${COLORS.BLACK_070};
      }
    }
  `,
};

export default navbarStyle;
