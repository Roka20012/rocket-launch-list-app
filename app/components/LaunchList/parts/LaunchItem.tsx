import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import RightArrow from '~/app/common/components/RightArrow';

import LaunchStatus from './LaunchStatus';

import { LaunchListItemType } from '~/app/store/types';
import { COLORS, STYLES } from '~/app/common/style';

export type LaunchItemProps = {
  item: LaunchListItemType;
  onPress: (launchListItem: LaunchListItemType) => void;
};

const LaunchItem = ({ item, onPress }: LaunchItemProps) => {
  const {
    name,
    status: { name: statusName },
    failreason,
  } = item;
  const isStatusSuccess = statusName === 'Success';

  const onPressCallback = () => onPress(item);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPressCallback}>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{name}</Text>
          <LaunchStatus success={isStatusSuccess} name={statusName} />
          {!!failreason && (
            <Text style={styles.reason}>
              Reason: <Text style={styles.failreason}>{failreason}</Text>
            </Text>
          )}
        </View>
        <RightArrow />
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 0.9,
  },
  name: {
    marginBottom: 6,
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
  reason: {
    marginTop: 6,
  },
  failreason: {
    ...STYLES.BODY_15_REGULAR,
    color: COLORS.TEXT_HINT,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: COLORS.TEXT_HINT,
  },
});

export default LaunchItem;
