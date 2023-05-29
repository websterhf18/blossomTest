// ↓ beloved react ↓
import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

// ↓ 3rd party utils ↓
import FastImage from 'react-native-fast-image';

// ↓ assets ↓
import Arrow from '@src/assets/arrow.svg';
import Heart from '@src/assets/heart.svg';

type Props = {
  route: any;
  navigation: any;
};

export default function DetailsScreen({route, navigation}: Props) {
  const itemDetail = route.params;
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="m-4">
        <TouchableOpacity onPress={onPress}>
          <Arrow />
        </TouchableOpacity>
      </View>
      <View className="m-4">
        <FastImage
          style={{width: 75, height: 75, borderRadius: 500}}
          source={{
            uri: itemDetail.image,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        {itemDetail.favorite && (
          <View className="bg-white rounded-2xl absolute left-14 p-2 bottom-0">
            <Heart color={'#53C629'} />
          </View>
        )}
      </View>
      <View className="m-4">
        <Text className="text-2xl" testID="detailName">
          {itemDetail.name}
        </Text>
      </View>
      <View className="ml-4 mr-4">
        <View className="h-16 border-t-4 border-gray-100">
          <View className="m-2 flex-row items-center">
            <View className="ml-4">
              <Text>{'Specie'}</Text>
              <Text className="text-gray-500">{itemDetail.species}</Text>
            </View>
          </View>
        </View>
        <View className="h-16 border-t-4 border-gray-100">
          <View className="m-2 flex-row items-center">
            <View className="ml-4">
              <Text>{'Status'}</Text>
              <Text className="text-gray-500">{itemDetail.status}</Text>
            </View>
          </View>
        </View>
        <View className="h-16 border-t-4 border-gray-100">
          <View className="m-2 flex-row items-center">
            <View className="ml-4">
              <Text>{'Location'}</Text>
              <Text className="text-gray-500">{itemDetail.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
