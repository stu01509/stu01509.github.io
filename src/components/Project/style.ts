import { css } from '@emotion/react';

const projectStyle = {
  projectContainer: css`
    margin-top: 32px;
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
  item: css`
    margin: 0 auto;
  `,
};

export default projectStyle;
