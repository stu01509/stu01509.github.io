import { fireEvent, render, RenderResult } from '@testing-library/react';
import Navbar, { TNavbarProps } from '@/src/components/Navbar';

describe('components > Navbar', () => {
  const renderNavbar = (props: TNavbarProps): RenderResult => {
    return render(<Navbar items={props.items} />);
  };

  it('should be able to render the Navbar', () => {
    const { getByText } = renderNavbar({
      items: [
        {
          name: 'PROJECT',
          onClick: jest.fn(),
        },
        {
          name: 'AWARD',
          onClick: jest.fn(),
        },
        {
          name: 'CV',
          onClick: jest.fn(),
        },
      ],
    });

    expect(getByText('Cliff Su')).toBeInTheDocument();
    expect(document.querySelector('a[href="/"]')).toBeInTheDocument();

    expect(getByText('PROJECT')).toBeInTheDocument();
    expect(getByText('AWARD')).toBeInTheDocument();
    expect(getByText('CV')).toBeInTheDocument();
  });

  it('should be able to click the Navbar item', () => {
    const projectSpy = jest.fn();
    const awardSpy = jest.fn();
    const cvSpy = jest.fn();

    renderNavbar({
      items: [
        {
          name: 'PROJECT',
          onClick: projectSpy,
        },
        {
          name: 'AWARD',
          onClick: awardSpy,
        },
        {
          name: 'CV',
          onClick: cvSpy,
        },
      ],
    });

    expect(projectSpy).not.toHaveBeenCalled();
    expect(awardSpy).not.toHaveBeenCalled();
    expect(cvSpy).not.toHaveBeenCalled();

    fireEvent.click(
      document.querySelector('button[data-testid="navbar-item-PROJECT"]')!
    );
    fireEvent.click(
      document.querySelector('button[data-testid="navbar-item-AWARD"]')!
    );
    fireEvent.click(
      document.querySelector('button[data-testid="navbar-item-CV"]')!
    );

    expect(projectSpy).toHaveBeenCalledTimes(1);
    expect(awardSpy).toHaveBeenCalledTimes(1);
    expect(cvSpy).toHaveBeenCalledTimes(1);
  });
});
