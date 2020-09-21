module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    '@typescript-eslint',
    'prettier/react',
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
    '@typescript-eslint/no-unused-vars': 'off', // can be handy
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-inline-styles': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
};
