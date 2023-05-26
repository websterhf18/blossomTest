import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';

import {getAllCharactersQuery} from '@src/services/getAllCharacters.query';
import {AppContext} from '@src/store';

import ListRowComponent from '../list-row.component';

export default function CharactersListFragment() {
  const {
    setCharacters,
    state: {characters},
  }: any = useContext(AppContext);
  const {loading, error, data} = getAllCharactersQuery();

  useEffect(() => {
    setCharacters(data?.characters?.results || []);
  }, [data]);

  const lenghtList = data?.characters?.info?.count || 0;

  return (
    <>
      <View className="mt-4 mb-4">
        <Text className="text-xs">
          {'Characters'}
          {`(${lenghtList})`}
        </Text>
      </View>
      <View className="items-center">
        {!loading ? (
          <>
            {characters.map((item: any, key: any) => {
              return <ListRowComponent key={key} {...item} />;
            })}
          </>
        ) : (
          <>
            <Text>{'Loading...'}</Text>
          </>
        )}
      </View>
    </>
  );
}
