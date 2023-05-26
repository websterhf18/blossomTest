import React from 'react';

import {Text, View, SafeAreaView} from 'react-native';

export default function AdvancedScreen({}) {
  return (
    <SafeAreaView>
      <View className="flex-1">
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}>
          {'AdvancedScreen'}
        </Text>
      </View>
    </SafeAreaView>
  );
}
