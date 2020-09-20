import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { COLORS, STYLES } from '~/app/common/style';
import { ANIMATABLE_CONFIG } from '~/app/common/constants';

export type EmptyBoxProps = {
  onGetNewListItems: () => void;
};

const EmptyBox = ({ onGetNewListItems }: EmptyBoxProps) => {
  return (
    <Animatable.View style={styles.emptyListContainer} {...ANIMATABLE_CONFIG}>
      <View style={styles.emptyListTitleContainer}>
        <Text style={styles.emptyListTitle}>Here will be your list 👇</Text>
        <TouchableOpacity style={styles.button} onPress={onGetNewListItems}>
          <Text style={[styles.emptyListTitle, styles.buttonTitle]}>
            Check for new items
          </Text>
        </TouchableOpacity>
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
    paddingVertical: 80,
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
  button: {
    marginTop: 13,
    borderRadius: 11,
    padding: 14,
    backgroundColor: COLORS.BUTTON_ACTIVE,
  },
  buttonTitle: {
    color: COLORS.WHITE,
  },
});

export default EmptyBox;
