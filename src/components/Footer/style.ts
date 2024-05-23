import MEDIA_QUERIES from '@/src/themes/mediaQueries';
import { css } from '@emotion/react';

const footerStyle = {
  footerContainer: css`
    padding: 16px 72px;

    @media (${MEDIA_QUERIES.TABLET}) {
      padding: 16px 32px;
    }

    @media (${MEDIA_QUERIES.MOBILE}) {
      padding: 12px 16px;
    }
  `,
  hr: css`
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
    margin-bottom: 16px;
  `,
  copyRight: css`
    font-size: 14px;
    letter-spacing: 1px;
    color: #6c757d;
  `,
};

export default footerStyle;
