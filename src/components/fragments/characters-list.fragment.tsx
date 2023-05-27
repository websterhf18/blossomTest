// ↓ beloved react ↓
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';

// ↓ services ↓
import {getAllCharactersQuery} from '@src/services/getAllCharacters.query';

// ↓ store ↓
import {useStore} from '@src/store';

// ↓ components ↓
import ListRowComponent from '../list-row.component';

// ↓ utils ↓
import {returnCharacters, translateCharacters} from '@src/utils/arrays.utils';

export default function CharactersListFragment() {
  const {characters, results, setCharacters}: any = useStore();

  const {loading, error, data} = getAllCharactersQuery();

  useEffect(() => {
    //To add favorite value
    const newCharacters = translateCharacters(data?.characters?.results || []);
    setCharacters(newCharacters);
  }, [data]);
  //Return only the false objects
  const lastCharacters = returnCharacters(
    results.length > 0 ? results : characters,
  );
  const lenghtList = lastCharacters.length || 0;

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
            {lastCharacters.map((item: any, key: any) => {
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
