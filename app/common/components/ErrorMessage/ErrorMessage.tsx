import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

import { ANIMATABLE_CONFIG } from '~/app/common/constants';
import { STYLES, COLORS } from '~/app/common/style';
import Ani from './errorAnimation.json';

export type ErrorMessageType = {
  message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageType) => {
  return (
    <SafeAreaView style={styles.errorContainer}>
      <Animatable.View {...ANIMATABLE_CONFIG}>
        <LottieView style={styles.animation} source={Ani} autoPlay loop />
        <Text style={styles.error}>Something went wrong...</Text>
        {!!message && <Text style={styles.errorSmall}>{message}</Text>}
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
});

export default ErrorMessage;
