import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LaunchListItemType } from '~/app/store/types';
import { COLORS, STYLES } from '~/app/common/style';

export type LaunchItemProps = {
  item: LaunchListItemType;
};

const LaunchItem = ({ item }: LaunchItemProps) => {
  const {
    name,
    status: { name: statusName },
    failreason,
  } = item;
  const isStatusSuccess = statusName === 'Success';

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>
        Status:{' '}
        <Text
          style={isStatusSuccess ? styles.statusSuccess : styles.statusFailure}
        >
          {statusName}
        </Text>
      </Text>
      {!!failreason && (
        <Text style={styles.reason}>
          Reason: <Text style={styles.failreason}>{failreason}</Text>
        </Text>
      )}
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 17,
  },
  name: {
    marginBottom: 6,
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
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
  reason: {
    marginTop: 6,
  },
  failreason: {
    ...STYLES.BODY_15_REGULAR,
    color: COLORS.TEXT_HINT,
  },
  divider: {
    marginTop: 17,
    borderWidth: 0.5,
    borderColor: COLORS.TEXT_HINT,
  },
});

export default LaunchItem;
