const typescriptEslintRecommendedRequiringTypeChecking =
  require('@typescript-eslint/eslint-plugin').configs[
    'recommended-requiring-type-checking'
  ];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    // "jest": true
    // "jest/globals": true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // should be last
  ],
  rules: {
    // 0: off, 1: warning, 2: error
    'no-console': 1,
    'prettier/prettier': 2,
  },

  overrides: [
    // TypeScript
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: './tsconfig.json', // Specify it only for TypeScript files
      },
    },

    // JavaScript
    {
      // NOTE: overrides the '.eslintignore' definition so errors/warnings will be shown for those
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
