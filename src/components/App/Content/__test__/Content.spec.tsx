import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithNetwork } from '~/../test/unit+integration/custom';

import { Content } from '..';

describe('Content', () => {
  it('should render navigation bar', () => {
    renderWithNetwork(<Content />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should navigate to pages', async () => {
    const user = userEvent.setup();
    renderWithNetwork(<Content />);

    await user.click(screen.getByText(/home/i));
    // expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(screen.getByTestId('page-home')).toBeInTheDocument();

    await user.click(screen.getByText(/about/i));
    // expect(screen.getByText(/about page/i)).toBeInTheDocument();
    expect(screen.getByTestId('page-about')).toBeInTheDocument();
  });
});
