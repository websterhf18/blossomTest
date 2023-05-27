// ↓ beloved react ↓
import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// ↓ 3rd party utils ↓
import {useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

// ↓ models & types ↓
import {AppRoutes} from '@src/types/routes.types';

// ↓ store ↓
import {useStore} from '@src/store';

// ↓ assets ↓
import Heart from '@src/assets/heart.svg';

export default function ListRowComponent(props: any) {
  const {id, name, image, species, status, location, favorite} = props;
  // ↓ other hooks ↓
  const navigation: any = useNavigation();
  const goToDetails = (item: any) => {
    navigation.navigate(AppRoutes.Details, {
      ...item,
      location: item.location.name,
    });
  };
  // ↓ state ↓
  const {characters, setCharacters}: any = useStore();

  // ↓ callbacks ↓
  const addToFavorites = (item: any) => {
    const indexObject = characters.findIndex((obj: any) => {
      return obj.id === item.id;
    });
    characters[indexObject].favorite = !item.favorite;
    setCharacters(characters);
  };
  return (
    <View className="h-16 border-t-2 border-gray-100 flex-row items-center">
      <View className="grow">
        <TouchableOpacity
          onPress={() =>
            goToDetails({id, name, image, species, status, location, favorite})
          }>
          <View className="m-2 flex-row items-center">
            <FastImage
              style={{width: 32, height: 32, borderRadius: 20}}
              source={{
                uri: image,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View className="ml-4">
              <Text>{name}</Text>
              <Text className="text-gray-500">{species}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-none mr-2">
        <TouchableOpacity
          onPress={() =>
            addToFavorites({
              id,
              name,
              image,
              species,
              status,
              location,
              favorite,
            })
          }>
          <Heart color={favorite ? '#53C629' : '#D1D5DB'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
