import { screen } from '@testing-library/react';
import { renderWithRouter } from '~/../test/unit+integration/custom';

import { NavBar } from '../';

describe('NavBar', () => {
  it('should render links', () => {
    renderWithRouter(<NavBar />);

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
