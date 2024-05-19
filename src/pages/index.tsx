import Navbar, { TNavbarItemProps } from '@/src/components/Navbar';

export default function Home() {
  const NAVBAR_ITEMS: TNavbarItemProps[] = [
    {
      name: 'PROJECT',
      onClick: () => {},
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

  return <Navbar items={NAVBAR_ITEMS} />;
}
