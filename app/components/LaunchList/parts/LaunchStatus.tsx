import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { STYLES, COLORS } from '~/app/common/style';

export type LaunchStatusProps = {
  name: string;
  success: boolean;
};

const LaunchStatus = ({ name, success }: LaunchStatusProps) => (
  <Text style={styles.status}>
    Status:{' '}
    <Text style={success ? styles.statusSuccess : styles.statusFailure}>
      {name}
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  status: {
    ...STYLES.BODY_15_REGULAR,
    color: COLORS.TEXT_MAIN,
  },
  statusSuccess: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.BUTTON_ACTIVE,
  },
  statusFailure: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_ERROR,
  },
});

export default LaunchStatus;
