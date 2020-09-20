import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStack } from '~/app/navigation';

import store from '~/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
