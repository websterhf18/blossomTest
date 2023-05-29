import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// ↓ assets ↓
import Arrow from '@src/assets/arrow.svg';

// ↓ store ↓
import {useStore} from '@src/store';
import ResultsListFragment from '@src/components/fragments/results.fragment';

type Props = {
  route: any;
  navigation: any;
};

export default function AdvancedScreen({route, navigation}: Props) {
  //
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
      <ScrollView>
        <ResultsListFragment />
      </ScrollView>
    </SafeAreaView>
  );
}
