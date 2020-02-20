module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'prettier',
  ],

  plugins: [
    'prettier',
    'flowtype',
  ],

  rules: {
    'prettier/prettier': ['error'],
  }
};
