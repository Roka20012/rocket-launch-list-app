import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import { ANIMATABLE_CONFIG } from '~/app/common/constants';
import { STYLES, COLORS } from '~/app/common/style';
import Ani from './errorAnimation.json';

export type ErrorMessageType = {
  message?: string;
  onPress?: () => void;
};

const ErrorMessage = ({ message, onPress }: ErrorMessageType) => {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <Animatable.View {...ANIMATABLE_CONFIG}>
        <LottieView style={styles.animation} source={Ani} autoPlay loop />
        <Text style={styles.error}>Something went wrong...</Text>
        {!!message && <Text style={styles.errorSmall}>{message}</Text>}
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={[styles.emptyListTitle, styles.buttonTitle]}>
            Check for new items
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.TITLE_26_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
  errorSmall: {
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.BODY_17_MEDIUM,
    color: COLORS.TEXT_SECOND,
    lineHeight: 25,
  },
  animation: {
    position: 'relative',
  },
  emptyListTitle: {
    textAlign: 'center',
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
  button: {
    marginHorizontal: 33,
    marginTop: 13,
    borderRadius: 11,
    padding: 14,
    justifyContent: 'center',
    backgroundColor: COLORS.BUTTON_ACTIVE,
  },
  buttonTitle: {
    color: COLORS.WHITE,
  },
});

export default ErrorMessage;
