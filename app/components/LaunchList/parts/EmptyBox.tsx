import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { COLORS, STYLES } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';

const EmptyBox = () => {
  return (
    <Animatable.View style={styles.emptyListContainer} {...ANIMATABLE_CONFIG}>
      <View style={styles.emptyListTitleContainer}>
        <Text style={styles.emptyListTitle}>Here will be your list 👇</Text>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emptyListTitleContainer: {
    paddingVertical: 90,
    marginHorizontal: 31,
    flexGrow: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.FIELD_DEFAULT,
    borderRadius: 15,
  },
  emptyListTitle: {
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
});

export default EmptyBox;
