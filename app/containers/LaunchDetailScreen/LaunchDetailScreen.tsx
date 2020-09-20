import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreenProps } from '~/app/navigation/types';
import { AppState } from '~/app/store/types';

const LaunchDetailScreen = ({
  navigation,
  route,
}: HomeScreenProps<'LaunchDetailScreen'>) => {
  console.log('route', route.params);

  return (
    <SafeAreaView>
      <Text>LaunchDetailScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LaunchDetailScreen;
