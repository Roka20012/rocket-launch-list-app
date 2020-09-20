import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { STYLES, COLORS } from '~/app/common/style';

export type OnlineStatusProps = {
  online: boolean;
  style?: StyleProp<ViewStyle>;
};

const OnlineStatus = ({ online, style }: OnlineStatusProps) => {
  return (
    <View style={style}>
      {online ? (
        <Text style={styles.onlineStatus}>online</Text>
      ) : (
        <Text style={styles.offlineStatus}>offline</Text>
      )}
    </View>
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
