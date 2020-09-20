import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreenProps } from '~/app/navigation/types';

const LaunchDetailScreen = ({
  navigation,
  route,
}: HomeScreenProps<'LaunchDetailScreen'>) => {
  return (
    <SafeAreaView>
      <Text>LaunchDetailScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LaunchDetailScreen;
