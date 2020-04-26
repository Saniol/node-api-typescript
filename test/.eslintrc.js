module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'plugin:mocha/recommended'],
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "mocha/no-mocha-arrows": 0,
    "mocha/no-hooks-for-single-case": 0
  }
};