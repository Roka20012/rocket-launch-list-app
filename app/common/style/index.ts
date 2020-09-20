import { StyleSheet } from 'react-native';

export enum COLORS {
  WHITE = '#FFFFFF',
  BLACK = '#000000',

  BUTTON_ACTIVE = '#1DA673',
  BUTTON_INACTIVE = '#8ED2B9',

  TEXT_MAIN = '#484848',
  TEXT_LINK = '#1F9267',
  TEXT_SECOND = '#7F7F7F',
  TEXT_HINT = '#B6B6B6',
  TEXT_ERROR = '#F65C34',

  FIELD_DEFAULT = '#E9EBF5',
  FIELD_ACTIVE = '#1F9267',
  FIELD_ERROR = '#F65C34',

  LEFT_MENU_HEADER = '#1DA673',
  LEFT_MENU_BORDER = '#E9EBF5',

  SELECTION_COLOR = '#8ED2B9',

  BLUE_SOLITUDE = '#E0E2EB',
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
  TITLE_48_MEDIUM: {
    fontFamily: 'Roboto-Medium',
    fontSize: 48,
  },
});
