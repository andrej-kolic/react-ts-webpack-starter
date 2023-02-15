import { createRoot } from 'react-dom/client';

import { App } from '~/components/App';

const externalLib: typeof ExternalLibExample = { version: 1 };
console.log(externalLib);

const rootNode = document.getElementById('app');
if (rootNode) {
  createRoot(rootNode).render(<App version="0.0.1" />);
}
