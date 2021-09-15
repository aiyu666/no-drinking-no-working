module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
  },
};
