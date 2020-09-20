import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { STYLES } from '~/app/common/style';
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
      <Text style={styles.listTitle}>Launch List</Text>
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
  listTitle: {
    marginTop: 23,
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.TITLE_34_MEDIUM,
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
