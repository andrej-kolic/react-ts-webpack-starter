import { createRoot } from 'react-dom/client';

import { App } from '~/components/App';
import type { AppProps } from '~/components/App';

// const externalLib: typeof ExternalLibExample = { version: 1 };
// console.log(externalLib);

const appProps: AppProps = {
  version: '0.1.1',

  // TODO: load from localStorage + update after login
  settings: {
    currencyCode: 'USD',
  },
};

const rootNode = document.getElementById('app');
if (rootNode) {
  createRoot(rootNode).render(<App {...appProps} />);
}
