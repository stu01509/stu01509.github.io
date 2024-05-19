import { render, RenderResult } from '@testing-library/react';
import HomePage from '@/src/pages';

describe('pages > index.tsx', () => {
  const renderHomePage = (): RenderResult => {
    return render(<HomePage />);
  };

  it('should be able to render the HomePage page', () => {
    const { getByText } = renderHomePage();
    expect(getByText('Cliff Su')).toBeInTheDocument();
  });
});
