// ↓ beloved react ↓
import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';

// ↓ store ↓
import {useStore} from '@src/store';

// ↓ components ↓
import ListRowComponent from '../list-row.component';

// ↓ utils ↓
import {returnFavorites} from '@src/utils/arrays.utils';

export default function FavoritesListFragment() {
  const {characters, results}: any = useStore();

  const favorites = returnFavorites(results.length > 0 ? results : characters);
  const lenghtList = favorites.length;

  return (
    <>
      <View className="mt-4 mb-4">
        <Text className="text-xs">
          {'Starred Characters'}
          {`(${lenghtList})`}
        </Text>
      </View>
      <View className="items-center">
        {lenghtList > 0 ? (
          <>
            {favorites.map((item: any, key: any) => {
              return <ListRowComponent key={key} {...item} />;
            })}
          </>
        ) : (
          <>
            <Text className="text-xs">{'Empty Favorites'}</Text>
          </>
        )}
      </View>
    </>
  );
}
