import { FC } from 'react';
import style from '@/src/components/Footer/style';

const Footer: FC = () => {
  const copyRight = `Copyright & Design © Cliff Su ${new Date().getFullYear()}`;

  return (
    <footer css={style.footerContainer}>
      <hr css={style.hr} />
      <p>{copyRight}</p>
    </footer>
  );
};

export default Footer;
