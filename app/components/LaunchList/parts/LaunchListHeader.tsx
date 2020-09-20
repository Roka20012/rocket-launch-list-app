import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { STYLES } from '~/app/common/style';

const LaunchListHeader = () => (
  <View style={styles.header}>
    <Text style={styles.listTitle}>Launch List</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginBottom: 26,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  listTitle: {
    paddingHorizontal: 16,
    textAlign: 'center',
    ...STYLES.TITLE_34_MEDIUM,
  },
});

export default LaunchListHeader;
