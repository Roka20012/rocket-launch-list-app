import React from 'react';
import { StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { STYLES, COLORS } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';

export type OnlineStatusProps = {
  online: boolean;
  style?: StyleProp<ViewStyle>;
};

const OnlineStatus = ({ online, style }: OnlineStatusProps) => {
  if (online) {
    return (
      <Animatable.View style={style} {...ANIMATABLE_CONFIG}>
        <Text style={styles.onlineStatus}>online</Text>
      </Animatable.View>
    );
  }

  return (
    <Animatable.View style={style} {...ANIMATABLE_CONFIG}>
      <Text style={styles.offlineStatus}>offline</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  onlineStatus: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.BUTTON_ACTIVE,
  },
  offlineStatus: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_ERROR,
  },
});

export default OnlineStatus;
