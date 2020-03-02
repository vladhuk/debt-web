const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],

  plugins: [
    'prettier',
    '@typescript-eslint',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    }
  },

  rules: {
    'prettier/prettier': [WARN],

    'import/prefer-default-export': OFF,
    'import/order': WARN,
    'import/no-useless-path-segments': WARN,

    'react/jsx-filename-extension': OFF,
    'react/destructuring-assignment': WARN,
    'react/prop-types': OFF,
    'react/jsx-boolean-value': WARN,
    'react/jsx-props-no-spreading': ERROR,
    'react/jsx-one-expression-per-line': OFF,

    'jsx-a11y/alt-text': WARN,

    'object-shorthand': WARN,
    'no-use-before-define': WARN,
    'prefer-template': WARN,
    'no-unused-expressions': OFF,
    'no-unused-vars': WARN,
    'no-undef': OFF,
  }
};
