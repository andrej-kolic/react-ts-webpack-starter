import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Content } from '..';

describe('Content', () => {
  it('should render navigation bar', () => {
    render(<Content />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should navigate to pages', async () => {
    render(<Content />);
    const user = userEvent.setup();

    // TODO: use test-id to detect pages?
    await user.click(screen.getByText(/home/i));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();

    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });
});
