import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { COLORS, STYLES } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';
import { LaunchListType, LaunchListItemType } from '~/app/store/types';

import { LaunchItem } from './parts';

export type LaunchListProps = {
  launchListItems?: LaunchListType['results'];
};

const LaunchList = ({ launchListItems = [] }: LaunchListProps) => {
  const renderItem = ({ item }: { item: LaunchListItemType }) => (
    <LaunchItem item={item} />
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.listTitle}>Launch List</Text>
        {true ? (
          <Text style={styles.onlineStatus}>online ·</Text>
        ) : (
          <Text style={styles.offlineStatus}>offline</Text>
        )}
      </View>
      <Animatable.View style={styles.listContainer} {...ANIMATABLE_CONFIG}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={launchListItems}
          renderItem={renderItem}
        />
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listTitle: {
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.TITLE_34_MEDIUM,
  },
  onlineStatus: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.BUTTON_ACTIVE,
  },
  offlineStatus: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_ERROR,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
  },
  listContent: {
    paddingTop: 33,
    paddingBottom: 21,
  },
});

export default LaunchList;
