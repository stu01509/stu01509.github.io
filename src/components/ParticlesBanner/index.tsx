import { FC, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import style from '@/src/components/ParticlesBanner/style';

const ParticlesBanner: FC = () => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 700,
          },
        },
        color: {
          value: '#000',
        },
        links: {
          enable: true,
          distance: 150,
          color: '#000',
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          straight: false,
          speed: 2,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },

        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 0.1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (isInit) {
    return (
      <Particles id="particles-js" css={style.particlesJs} options={options} />
    );
  }

  return <></>;
};

export default ParticlesBanner;
