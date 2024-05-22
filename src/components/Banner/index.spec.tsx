import { ReactElement } from 'react';
import { RenderResult, render } from '@testing-library/react';
import Banner from '@/src/components/Banner';

jest.mock('@/src/components/ParticlesBanner', () => ({
  __esModule: true,
  default: ({ children }: { children: ReactElement }) => <>{children}</>,
}));

describe('components > Banner', () => {
  const renderBanner = (): RenderResult => {
    return render(<Banner />);
  };

  it('should be able to render the Banner', () => {
    const { getByText } = renderBanner();

    expect(getByText('Cliff Su')).toBeInTheDocument();
    expect(
      getByText(
        "Hi, I'm Cliff from Taiwan, an open-source enthusiast, and a remote work lover. My interests are Frontend, Backend and Android App."
      )
    ).toBeInTheDocument();
    expect(
      document.querySelector('a[href="mailto:guanwu01509@gmail.com"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('a[href="https://github.com/stu01509"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('a[href="https://medium.com/@guanwu"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('a[href="https://www.linkedin.com/in/cliffsu"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('a[href="https://codepen.io/CliffSu/"]')
    ).toBeInTheDocument();
  });
});
