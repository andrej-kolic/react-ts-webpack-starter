import * as dotEnvSafe from 'dotenv-safe';
dotEnvSafe.config();

// -> https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// -> https://mswjs.io/docs/getting-started/integrate/node
import { setupServer } from 'msw/node';

import { handlers } from '../mocks/http';

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
