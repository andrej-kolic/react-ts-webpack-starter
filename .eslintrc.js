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
    project: './tsconfig.json',
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
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier',
  ],
  rules: {
    // 0: off, 1: warning, 2: error
    'no-console': 1,
    'prettier/prettier': 2,
  },

  overrides: [
    // JavaScript
    {
      // NOTE: overrides the '.eslintignore' definition so errors/warnings will be shown for those
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: null,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
      // exclude all the rules from 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      // rules: Object.keys(
      //   typescriptEslintRecommendedRequiringTypeChecking.rules,
      // ).reduce(
      //   (rules, key) => {
      //     rules[key] = 'off';
      //     return rules;
      //   },
      //   {
      //     '@typescript-eslint/no-var-requires': 'off',
      //     // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#configuring-in-a-mixed-jsts-codebase
      //     '@typescript-eslint/explicit-member-accessibility': 'off',
      //     'import/no-anonymous-default-export': 'off',
      //     'import/no-default-export': 'off',
      //   },
      // ),
    },
  ],

  /*
  _overrides: [
    // JavaScript
    {
      // NOTE: overrides the '.eslintignore' definition so errors/warnings will be shown for those
      files: ['*.js'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: null,
      },
      // exclude all the rules from 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      rules: Object.keys(
        typescriptEslintRecommendedRequiringTypeChecking.rules,
      ).reduce(
        (rules, key) => {
          rules[key] = 'off';
          return rules;
        },
        {
          '@typescript-eslint/no-var-requires': 'off',
          // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#configuring-in-a-mixed-jsts-codebase
          '@typescript-eslint/explicit-member-accessibility': 'off',
          'import/no-anonymous-default-export': 'off',
          'import/no-default-export': 'off',
        },
      ),
    },
  ],
  */
};
