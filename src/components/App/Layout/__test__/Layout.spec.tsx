import { screen } from '@testing-library/react';
import { renderWithRouter } from '~/../test/unit+integration/custom';
import { Layout } from '..';

describe('Layout', () => {
  it('should display layout elements', () => {
    renderWithRouter(<Layout />);

    expect(
      screen.getByText('React typescript starter app'),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
