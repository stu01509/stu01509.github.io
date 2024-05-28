import { css } from '@emotion/react';

const projectStyle = {
  projectContainer: css`
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
  itemContainer: css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;
  `,
};

export default projectStyle;
