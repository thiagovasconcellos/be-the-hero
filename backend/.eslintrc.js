module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off",
    "func-names": "off",
    "camelcase": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-underscore-dangle": "off"
  },
};
