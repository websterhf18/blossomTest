// ↓ beloved react ↓
import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// ↓ store ↓
import {useStore} from '@src/store';

// ↓ components ↓
import ListRowComponent from '../list-row.component';

// ↓ utils ↓
import {returnAdvancedFilter, returnFavorites} from '@src/utils/arrays.utils';
import {CharactersType, StoreType} from '@src/types/main.types';

export default function ResultsListFragment() {
  const {characters, filters}: StoreType = useStore();

  const newResults = () => {
    let newCharacters: Array<CharactersType> = [];
    if (filters.characters !== 'ALL') {
      newCharacters = returnFavorites(characters);
    }
    if (filters.specie !== 'ALL') {
      newCharacters = [
        ...newCharacters,
        ...returnAdvancedFilter(characters, filters.specie),
      ];
    }
    return newCharacters;
  };
  const countFilters = () => {
    let count = 0;
    if (filters.characters !== 'ALL') {
      count += 1;
    }
    if (filters.specie !== 'ALL') {
      count += 1;
    }
    return count;
  };
  const lenghtList = newResults().length;

  return (
    <>
      <View className="flex-row ml-4 mt-6 mr-4 py-4 justify-between items-center border-t-2 border-gray-100 border-b-2">
        <View className="">
          <Text className="text-sky-600">{`${lenghtList} Results`}</Text>
        </View>
        <View className="px-2 py-1 bg-teal-300 rounded-xl">
          <Text className="text-teal-700 text-xs">{`${countFilters()} filters`}</Text>
        </View>
      </View>
      <View className="ml-4 mr-4">
        <View className="items-center mt-4 mb-4">
          {lenghtList > 0 ? (
            <>
              {newResults().map(
                (item: CharactersType, key: number | string) => {
                  return <ListRowComponent key={key} {...item} />;
                },
              )}
            </>
          ) : (
            <>
              <Text className="text-xs">{'Empty Results'}</Text>
            </>
          )}
        </View>
      </View>
    </>
  );
}
