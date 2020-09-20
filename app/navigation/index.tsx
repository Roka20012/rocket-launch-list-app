import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaunchScreen from '~/app/containers/LaunchScreen';
import LaunchDetailScreen from '~/app/containers/LaunchDetailScreen';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen
          name="LaunchDetailScreen"
          component={LaunchDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
