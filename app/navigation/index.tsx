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
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{
            title: 'Launch List',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LaunchDetailScreen"
          component={LaunchDetailScreen}
          options={{ title: 'Launch Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
