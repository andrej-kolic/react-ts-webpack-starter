import type { ReactElement, ReactNode, PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

export function renderWithRouter(
  ui: ReactElement,
  history = ['/'],
  options?: RenderOptions,
): RenderResult {
  for (const route of history) {
    window.history.pushState({}, '', route);
  }

  return render(<BrowserRouter>{ui}</BrowserRouter>, options);
}

export function renderInApp(
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult {
  return renderWithRouter(ui, undefined, options);
}
