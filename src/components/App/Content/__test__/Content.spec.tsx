import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithNetwork } from '~/../test/unit+integration/custom';

import { Content } from '..';

describe('Content', () => {
  // TODO: move to Layout.spec?
  it('should render navigation bar', () => {
    renderWithNetwork(<Content />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  // TODO: use location instead of interaction?
  // TODO: move to NavBar.spec?
  it('links should navigate to pages', async () => {
    const user = userEvent.setup();
    renderWithNetwork(<Content />);

    await user.click(screen.getByText(/home/i));
    // expect(screen.getByText(/home page/i)).toBeInTheDocument();
    expect(await screen.findByTestId('page-home')).toBeInTheDocument();

    await user.click(screen.getByText(/about/i));
    // expect(screen.getByText(/about page/i)).toBeInTheDocument();
    expect(await screen.findByTestId('page-about')).toBeInTheDocument();

    await user.click(screen.getByText(/storybook/i));
    // expect(screen.getByText(/storybook/i)).toBeInTheDocument();
    expect(await screen.findByTestId('page-storybook')).toBeInTheDocument();

    await user.click(screen.getByText(/settings/i));
    // expect(screen.getByText(/storybook/i)).toBeInTheDocument();
    expect(await screen.findByTestId('page-settings')).toBeInTheDocument();
  });
});
