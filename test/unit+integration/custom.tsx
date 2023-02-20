import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { queryClient } from '~/components/App';
import { SettingsProvider } from '~/hooks/settings';

//

export function renderWithSettings(
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult {
  return render(<SettingsProvider>{ui}</SettingsProvider>, options);
}

//

type QueryClientConfig = ConstructorParameters<typeof QueryClient>[0];

const queryClientConfig: QueryClientConfig = {
  defaultOptions: queryClient.getDefaultOptions(),
};

/**
 * @param ui      -
 * @param config -
 * @param options -
 */
export function renderWithNetwork(
  ui: ReactElement,
  config: QueryClientConfig = queryClientConfig,
  options?: RenderOptions,
): RenderResult {
  const client = new QueryClient(config);

  return renderWithSettings(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
    options,
  );
}

//

export function renderWithRouter(
  ui: ReactElement,
  history = ['/'],
  options?: RenderOptions,
): RenderResult {
  for (const route of history) {
    window.history.pushState({}, '', route);
  }

  return renderWithNetwork(
    <BrowserRouter>{ui}</BrowserRouter>,
    undefined,
    options,
  );
}

//

export function renderInApp(
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult {
  return renderWithRouter(ui, undefined, options);
}
