module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    '@typescript-eslint',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // need better config
    'import/no-extraneous-dependencies': 'off',
    // TS compiler will take care of this
    'default-case': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // opinions:
    'max-lines-per-function': ['error', 90],
    'max-lines': ['error', 300],
    '@typescript-eslint/no-unused-vars': 'off', // can be handy
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-inline-styles': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
};
