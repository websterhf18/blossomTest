// ↓ beloved react ↓
import React from 'react';

// v 3rd party utils ↓
import * as RNN from '@react-navigation/native';

// ↓ 3rd party react components ↓
import {
  // ↓ components ↓
  View,
  StatusBar,
  // ↓ types ↓
  // ↓ hooks ↓
  // ↓ apis ↓
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// ↓ utils ↓

// ↓ constants ↓
import AppNavigator from '@src/app.navigator';

// Apollo Provider
import {ApolloProvider} from '@apollo/client';
import {client} from '@src/config';

const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <View className="flex-1">
          <StatusBar translucent barStyle={'dark-content'} />
          <RNN.NavigationContainer>
            <AppNavigator />
          </RNN.NavigationContainer>
        </View>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};
export default App;
