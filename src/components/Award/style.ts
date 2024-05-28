import { css } from '@emotion/react';

const awardStyle = {
  awardContainer: css`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    scroll-margin-top: 60px;
  `,
  contentContainer: css`
    width: 75%;
  `,
  title: css`
    font-size: 32px;
  `,
  table: css`
    width: 100%;
  `,
  tr: css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }
  `,
  td: css`
    padding: 12px;
  `,
  link: css`
    text-decoration: none;
    color: #007bff;
  `,
};

export default awardStyle;
