import { RenderResult, render } from '@testing-library/react';
import Project from '@/src/components/Project';

describe('components > Project', () => {
  const renderProject = (): RenderResult => {
    return render(<Project />);
  };

  it('should be able to render the Project', () => {
    const { getByText } = renderProject();

    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('NKUST LINE Bot')).toBeInTheDocument();
    expect(
      document.querySelector(
        'a[href="https://github.com/stu01509/Node.js-NKUST-Line-Bot"]'
      )
    ).toBeInTheDocument();
    expect(
      document.querySelector('img[alt="NKUST LINE Bot Project Image"]')
    ).toBeInTheDocument();
  });
});
