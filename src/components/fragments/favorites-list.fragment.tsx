import React, {useContext} from 'react';

import {Text, View} from 'react-native';

import {AppContext} from '@src/store';

import ListRowComponent from '../list-row.component';

export default function FavoritesListFragment() {
  const {
    state: {favorites},
  }: any = useContext(AppContext);

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
