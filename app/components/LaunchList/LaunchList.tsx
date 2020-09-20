import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { STYLES } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';
import { LaunchListType, LaunchListItemType } from '~/app/store/types';

import { LaunchItem, LaunchListHeader } from './parts';

export type LaunchListProps = {
  onPress: (launchListItem: LaunchListItemType) => void;
  launchListItems?: LaunchListType['results'];
  isLoadingMore?: boolean;
  refreshing?: boolean;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onRefresh?: () => void;
};

const LaunchList = ({
  launchListItems = [],
  isLoadingMore,
  onEndReached,
  refreshing,
  onRefresh,
  onPress,
}: LaunchListProps) => {
  const renderItem = ({ item }: { item: LaunchListItemType }) => (
    <LaunchItem item={item} onPress={onPress} />
  );

  return (
    <Animatable.View style={styles.listContainer} {...ANIMATABLE_CONFIG}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={LaunchListHeader}
        ListFooterComponent={
          isLoadingMore ? <ActivityIndicator style={styles.footer} /> : null
        }
        onEndReachedThreshold={0.1}
        onEndReached={onEndReached}
        renderItem={renderItem}
        refreshing={refreshing}
        data={launchListItems}
        indicatorStyle="black"
        onRefresh={onRefresh}
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
  footer: {
    marginTop: 16,
    alignSelf: 'center',
    ...STYLES.BODY_17_MEDIUM,
  },
});

export default LaunchList;
