import MEDIA_QUERIES from '@/src/themes/mediaQueries';
import { css } from '@emotion/react';

const bannerStyle = {
  bannerContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    margin-top: 60px;
    position: relative;
    background-color: #eee;

    @media (${MEDIA_QUERIES.TABLET}) {
      height: 100vh;
    }
  `,
  particlesJs: css`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  contentContainer: css`
    width: 75%;
    z-index: 1;
  `,
  heading: css`
    font-size: 48px;
    font-weight: 500;
    border-bottom: 2px #000 solid;
  `,
  introContainer: css`
    display: flex;
    justify-content: space-around;
    margin-top: 8px;

    div:first-of-type {
      width: 70%;
    }
    div:last-child {
      width: 30%;
      text-align: right;
    }

    @media (${MEDIA_QUERIES.TABLET}) {
      display: block;

      div:first-of-type {
        width: 100%;
      }
      div:last-child {
        width: 100%;
        text-align: left;
      }
    }
  `,
  intro: css`
    font-size: 20px;
    margin-bottom: 8px;
  `,
  socialLink: css`
    margin: 0 4px;
    svg {
      width: 28px;
      height: 28px;
    }
  `,
};

export default bannerStyle;
