import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LaunchScreen from '~/app/containers/LaunchScreen';

import store from '~/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LaunchScreen />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
