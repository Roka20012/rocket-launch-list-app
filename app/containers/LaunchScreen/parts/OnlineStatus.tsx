import React from 'react';
import { StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { STYLES, COLORS } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';

export type OnlineStatusType = 'online' | 'offline' | 'checking-connection';

export type OnlineStatusProps = {
  online: OnlineStatusType;
  style?: StyleProp<ViewStyle>;
};

const OnlineStatus = ({ online, style }: OnlineStatusProps) => {
  if (online === 'checking-connection') {
    return (
      <Animatable.View style={style} {...ANIMATABLE_CONFIG}>
        <Text style={styles.checkingConnectionStatus}>
          checking connection...
        </Text>
      </Animatable.View>
    );
  }

  if (online === 'online') {
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
  checkingConnectionStatus: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_SECOND,
  },
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
