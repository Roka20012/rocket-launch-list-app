import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { ANIMATABLE_CONFIG } from '~/app/common/constants';
import { LaunchListType, LaunchListItemType } from '~/app/store/types';

import { LaunchItem, LaunchListHeader, EmptyBox } from './parts';

export type LaunchListProps = {
  onPress: () => void;
  launchListItems?: LaunchListType['results'];
};

const LaunchList = ({ launchListItems = [], onPress }: LaunchListProps) => {
  const renderItem = ({ item }: { item: LaunchListItemType }) => (
    <LaunchItem item={item} onPress={onPress} />
  );

  if (!launchListItems.length) {
    return <EmptyBox />;
  }

  return (
    <Animatable.View style={styles.listContainer} {...ANIMATABLE_CONFIG}>
      <FlatList
        style={styles.list}
        ListHeaderComponent={LaunchListHeader}
        contentContainerStyle={styles.listContent}
        data={launchListItems}
        renderItem={renderItem}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 21,
  },
});

export default LaunchList;
