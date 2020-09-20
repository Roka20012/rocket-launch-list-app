import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreenProps } from '~/app/navigation/types';

const LaunchDetailScreen = ({
  navigation,
  route,
}: HomeScreenProps<'LaunchDetailScreen'>) => {
  return (
    <View>
      <Text>LaunchDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LaunchDetailScreen;