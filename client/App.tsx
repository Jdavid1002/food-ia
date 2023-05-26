import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/storage/redux-storage';

import AppNavigator from './src/components/AppNavigator';
import ScreenSplash from './src/components/ScreenSplash';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{height : '100%'}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {(bootstrapped: any) => {
            if (bootstrapped) {
              return <AppNavigator />;
            } else {
              return <ScreenSplash />;
            }
          }}
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;