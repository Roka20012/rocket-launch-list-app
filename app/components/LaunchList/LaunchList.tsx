import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import { STYLES } from '~/app/common/style';
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
      <Text style={styles.listTitle}>Launch List</Text>
      <FlatList
        style={styles.list}
        data={launchListItems}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    marginTop: 23,
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.TITLE_34_MEDIUM,
  },
  list: {
    paddingTop: 36,
    paddingHorizontal: 16,
  },
});

export default LaunchList;
