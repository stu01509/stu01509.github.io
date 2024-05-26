import { RenderResult, render } from '@testing-library/react';
import Footer from '@/src/components/Footer';

describe('components > Footer', () => {
  const renderFooter = (): RenderResult => {
    return render(<Footer />);
  };

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('23 May 2024 00:00:00 GMT').getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be able to render the Footer', () => {
    const { getByText } = renderFooter();

    expect(
      getByText('Copyright & Design © Cliff Su 2024')
    ).toBeInTheDocument();
  });
});
