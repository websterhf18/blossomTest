import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

// ↓ assets ↓
import Arrow from '@src/assets/arrow.svg';

export default function AdvancedScreen({route, navigation}: any) {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row ml-4 mt-4 mr-4 items-center">
        <TouchableOpacity onPress={() => goBack()}>
          <View className="flex-none w-16">
            <Arrow />
          </View>
        </TouchableOpacity>
        <View className="grow items-center">
          <Text className="text-base">{'Advanced search'}</Text>
        </View>
        <TouchableOpacity onPress={() => goBack()}>
          <View className="flex-none w-16 items-center">
            <Text className="text-sm text-purple-700">{'Done'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row ml-4 mt-6 mr-4 py-4 justify-between items-center border-t-2 border-gray-100 border-b-2">
        <View className="">
          <Text className="text-sky-600">{'5 Results'}</Text>
        </View>
        <View className="px-2 py-1 bg-teal-300 rounded-xl">
          <Text className="text-teal-700 text-xs">{'1 Filter'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
