import { FC } from 'react';
import Link from 'next/link';
import ParticlesBanner from '@/src/components/ParticlesBanner';
import IconEmail from '@/src/components/Icons/IcEnvelopeSolid.svg';
import IconGithub from '@/src/components/Icons/IcGithub.svg';
import IconMedium from '@/src/components/Icons/IcMedium.svg';
import IconLinkedin from '@/src/components/Icons/IcLinkedin.svg';
import IconCodepen from '@/src/components/Icons/IcCodepen.svg';
import style from '@/src/components/Banner/style';

const INTRO =
  "Hi, I'm Cliff from Taiwan, an open-source enthusiast, and a remote work lover. My interests are Frontend, Backend and Android App.";

const Banner: FC = () => {
  return (
    <div css={style.bannerContainer}>
      <ParticlesBanner />
      <div css={style.contentContainer}>
        <h1 css={style.heading}>Cliff Su</h1>
        <div css={style.introContainer}>
          <div>
            <p css={style.intro}>{INTRO}</p>
          </div>
          <div>
            <Link
              href="mailto:guanwu01509@gmail.com"
              css={style.socialLink}
              title="E-Mail"
            >
              <IconEmail />
            </Link>
            <Link
              href="https://github.com/stu01509"
              target="_blank"
              title="Github"
              css={style.socialLink}
            >
              <IconGithub />
            </Link>
            <Link
              href="https://medium.com/@guanwu"
              target="_blank"
              title="Medium"
              css={style.socialLink}
            >
              <IconMedium />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cliffsu"
              target="_blank"
              title="Linkedin"
              css={style.socialLink}
            >
              <IconLinkedin />
            </Link>
            <Link
              href="https://codepen.io/CliffSu/"
              target="_blank"
              title="Codepen"
              css={style.socialLink}
            >
              <IconCodepen />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
