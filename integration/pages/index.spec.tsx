import { render, RenderResult } from '@testing-library/react';
import HomePage from '@/src/pages';
import { ReactElement } from 'react';

jest.mock('@/src/components/ParticlesBanner', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactElement }) => <>{children}</>,
}));

describe('pages > index.tsx', () => {
  const renderHomePage = (): RenderResult => {
    return render(<HomePage />);
  };

  it('should be able to render the HomePage page', () => {
    renderHomePage();
    expect(document.querySelector('a[href="/"]')).toBeInTheDocument();
  });
});
