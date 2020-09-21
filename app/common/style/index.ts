import { StyleSheet } from 'react-native';

export enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#000000',

  BUTTON_ACTIVE = '#1DA673',

  TEXT_HINT = '#B6B6B6',
  TEXT_MAIN = '#484848',
  TEXT_ERROR = '#F65C34',
  TEXT_SECOND = '#7F7F7F',

  FIELD_DEFAULT = '#E9EBF5',
}

export const STYLES = StyleSheet.create({
  BODY_15_REGULAR: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  BODY_15_MEDIUM: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
  },
  BODY_17_MEDIUM: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
  TITLE_26_MEDIUM: {
    fontFamily: 'Roboto-Medium',
    fontSize: 26,
  },
  TITLE_34_MEDIUM: {
    fontFamily: 'Roboto-Medium',
    fontSize: 34,
  },
});
