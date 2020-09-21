import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { COLORS, STYLES } from '~/app/common/style';

export type OptionProps = {
  title?: string;
  option?: string | number | null;
  separator?: string | null;
};

const Option = ({ title, separator = ': ', option }: OptionProps) => {
  return (
    <>
      {!!option && (
        <Text style={styles.name}>
          {title}
          {separator}
          {option}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    marginBottom: 6,
    ...STYLES.BODY_15_MEDIUM,
    color: COLORS.TEXT_MAIN,
  },
});

export default Option;
