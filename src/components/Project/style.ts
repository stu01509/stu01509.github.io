import MEDIA_QUERIES from '@/src/themes/mediaQueries';
import { css } from '@emotion/react';

const projectStyle = {
  projectContainer: css`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    scroll-margin-top: 56px;
  `,
  contentContainer: css`
    width: 75%;
  `,
  title: css`
    font-size: 32px;
  `,
  itemContainer: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;

    @media (${MEDIA_QUERIES.TABLET}) {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    @media (${MEDIA_QUERIES.MOBILE}) {
      grid-template-columns: repeat(1, 1fr);
      gap: 0;
    }
  `,
};

export default projectStyle;
