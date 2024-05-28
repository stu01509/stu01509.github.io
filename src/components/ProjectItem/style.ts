import { css } from '@emotion/react';

const projectItemStyle = {
  itemContainer: css`
    min-width: 33.3%;
    margin: 24px auto;
    transition: opacity 0.3s ease;
    text-decoration: none;
    text-align: center;

    &:hover {
      opacity: 0.5;
    }
  `,
  image: css`
    max-width: 100%;
    height: auto;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4);
    border-radius: 2px;
  `,
  description: css`
    font-size: 20px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 16px;
    color: #6c757d;
  `,
};

export default projectItemStyle;
