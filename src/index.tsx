import { App } from './App';
import { createRoot } from 'react-dom/client';
import type { ReactNode } from 'react';

function sayHi(name: string): string {
  return `Hi, ${name}!`;
}

console.log(2); // TODO: remove

const externalLib: typeof ExternalLibExample = { version: 1 };
console.log(externalLib);

console.log(sayHi('Rey'));

export { sayHi };

const rootNode = document.getElementById('app');
if (rootNode) {
  // createRoot(rootNode).render(App({ version: '0.0.1' }));
  createRoot(rootNode).render(<App version="0.0.1" />);
}
