const { rootDir, sourceDir } = require('./helpers/paths');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
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
};
