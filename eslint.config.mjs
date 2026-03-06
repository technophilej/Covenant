import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
  },
  {
    files: ['**/*.{js,jsx,mjs}'],
    plugins: { react: reactPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        process: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        Promise: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        FormData: 'readonly',
        File: 'readonly',
        IntersectionObserver: 'readonly',
        module: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
];
