import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '~/../test/unit+integration/custom';

import { Content } from '..';

describe('Content', () => {
  it('should render navigation bar', () => {
    // console.log('***', Request);
    render(<Content />);
    // expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should navigate to home page', async () => {
    render(<Content />);

    const user = userEvent.setup();
    await user.click(screen.getByText(/home/i));

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
