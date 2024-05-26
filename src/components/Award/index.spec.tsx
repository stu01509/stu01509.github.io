import { RenderResult, render } from '@testing-library/react';
import Award from '@/src/components/Award';

describe('components > Award', () => {
  const renderAward = (): RenderResult => {
    return render(<Award />);
  };

  it('should be able to render the Award', () => {
    const { getByText } = renderAward();

    expect(getByText('Awards')).toBeInTheDocument();
    expect(getByText('2015')).toBeInTheDocument();
    expect(getByText('Microsoft Community Champion')).toBeInTheDocument();
    expect(getByText('6th Place Award')).toBeInTheDocument();
  });
});
