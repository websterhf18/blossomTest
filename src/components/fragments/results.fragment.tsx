// ↓ beloved react ↓
import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// ↓ store ↓
import {useStore} from '@src/store';

// ↓ components ↓
import ListRowComponent from '../list-row.component';

// ↓ utils ↓
import {returnAdvancedFilter, returnFavorites} from '@src/utils/arrays.utils';

export default function ResultsListFragment() {
  const {characters, filters}: any = useStore();

  const newResults = () => {
    let newCharacters = [];
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
  const lenghtList = newResults().length;

  return (
    <>
      <View className="items-center mt-4 mb-4">
        {lenghtList > 0 ? (
          <>
            {newResults().map((item: any, key: any) => {
              return <ListRowComponent key={key} {...item} />;
            })}
          </>
        ) : (
          <>
            <Text className="text-xs">{'Empty Results'}</Text>
          </>
        )}
      </View>
    </>
  );
}
