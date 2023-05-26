// ↓ beloved react ↓
import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// ↓ 3rd party utils ↓
import {useNavigation} from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

// ↓ models & types ↓
import {AppRoutes} from '@src/types/routes.types';

// ↓ store ↓
import {AppContext} from '@src/store';

// ↓ assets ↓
import Heart from '@src/assets/heart.svg';

export default function ListRowComponent({
  id,
  name,
  image,
  species,
  status,
  location,
}: any) {
  // ↓ other hooks ↓
  const navigation: any = useNavigation();
  const goToDetails = (item: any) => {
    navigation.navigate(AppRoutes.Details, {
      ...item,
      location: item.location.name,
    });
  };
  // ↓ state ↓
  const {
    setFavorites,
    setCharacters,
    state: {favorites, characters},
  }: any = useContext(AppContext);

  const removeObjectWithId = (arr: any, id: any) => {
    return arr.filter((obj: any) => obj.id !== id);
  };

  // ↓ callbacks ↓
  const addToFavorites = (item: any) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    //
    const newCharacters = removeObjectWithId(characters, item.id);
    setCharacters(newCharacters);
  };
  const isOnFavorites = (id: any) => {
    return Boolean(favorites.find((item: any) => item.id === id));
  };
  return (
    <View className="h-16 border-t-2 border-gray-100 flex-row items-center">
      <View className="grow">
        <TouchableOpacity
          onPress={() =>
            goToDetails({id, name, image, species, status, location})
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
            addToFavorites({id, name, image, species, status, location})
          }>
          <Heart color={isOnFavorites(id) ? '#53C629' : '#D1D5DB'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
