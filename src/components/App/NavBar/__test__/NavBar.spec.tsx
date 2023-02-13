import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '~/../test/unit+integration/custom';

import { NavBar } from '..';

describe('NavBar', () => {
  it('should render links', () => {
    renderWithRouter(<NavBar />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    // TODO: test by link?
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('should navigate to path', async () => {
    const user = userEvent.setup();
    renderWithRouter(<NavBar />);

    await user.click(screen.getByText(/home/i));
    expect(window.location.pathname).toBe('/home');

    await user.click(screen.getByText(/about/i));
    expect(window.location.pathname).toBe('/about');
  });
});
