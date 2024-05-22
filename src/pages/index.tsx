import { useRef } from 'react';
import Navbar, { TNavbarItemProps } from '@/src/components/Navbar';
import Banner from '@/src/components/Banner';

export default function Home() {
  const projectRef = useRef<HTMLElement | null>(null);

  const NAVBAR_ITEMS: TNavbarItemProps[] = [
    {
      name: 'PROJECT',
      onClick: () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      name: 'AWARDS',
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
      {/* <h1 ref={projectRef}>Project</h1> */}
    </>
  );
}
