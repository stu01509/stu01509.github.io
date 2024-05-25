import { useRef } from 'react';
import Navbar, { TNavbarItemProps } from '@/src/components/Navbar';
import Banner from '@/src/components/Banner';
import Footer from '@/src/components/Footer';
import Project from '@/src/components/Project';

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);

  const NAVBAR_ITEMS: TNavbarItemProps[] = [
    {
      name: 'PROJECT',
      onClick: () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'AWARD',
      onClick: () => {},
    },
    {
      name: 'CV',
      onClick: () => {
        window.open('/Guan-Wu (Cliff) Su_Resume.pdf');
      },
    },
  ];

  return (
    <>
      <Navbar items={NAVBAR_ITEMS} />
      <Banner />
      <Project ref={projectRef} />
      <Footer />
    </>
  );
}
