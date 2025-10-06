import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    ignores: [
      '**/node_modules/**',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
  pluginJs.configs.recommended,
  playwright.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    rules: {
      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 100,
          comments: 110,
        },
      ],
      'playwright/expect-expect': 'off',
    },
  },
];
