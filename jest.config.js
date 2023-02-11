import { rootDir, sourceDir } from './helpers/paths.js';

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/unit+integration/setup.ts'],
  testRegex: './src/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '\\.css$': 'identity-obj-proxy',
    // '\\.esm$': `${rootDirectory}/test/mocks/esm.js`,
    // './assets/*': `${rootDirectory}/test/mocks/asset.js`,
  },
  roots: [`${sourceDir}`],

  // jest should with --runInBand to support globals! (https://github.com/facebook/jest/issues/5731)
  globals: {
    // fetch: global.fetch,
    Request: Request,
  },
};
