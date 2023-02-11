import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { renderWithRouter } from '~/../test/unit+integration/custom';

import { NavBar } from '../';

describe('NavBar', () => {
  it('should render links', () => {
    // renderWithRouter(<NavBar />);
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
