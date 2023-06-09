// ↓ beloved react ↓
import React, {useState} from 'react';

import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _ from 'lodash';

// ↓ fragments ↓
import FavoritesListFragment from '@src/components/fragments/favorites-list.fragment';
import CharactersListFragment from '@src/components/fragments/characters-list.fragment';
import FiltersFragment from '@src/components/fragments/filters.fragment';

// ↓ assets ↓
import Search from '@src/assets/search.svg';
import Filter from '@src/assets/filters.svg';

// ↓ store ↓
import {useStore} from '@src/store';
import {CharactersType, StoreType} from '@src/types/main.types';

export default function MainListScreen({}) {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);
  const {characters, setResults}: StoreType = useStore();
  const findInput = (value: string) => {
    setText(value);
    const results = characters.filter((item: CharactersType) => {
      if (value === '') return characters;
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setResults(results);
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="h-24 w-full">
          <Text className="text-2xl mt-auto ml-4">{'Rick and Morty List'}</Text>
        </View>
        <View className="items-center ml-4 mr-4 mt-4 mb-2">
          <View className="flex-row items-center bg-gray-100 w-full rounded-lg">
            <View className="m-2">
              <Search />
            </View>
            <TextInput
              className="h-10 mt-1 mb-1 grow"
              onChangeText={findInput}
              value={text}
              placeholder="Search or filter results"
            />
            <View className="m-2">
              <TouchableOpacity onPress={() => setModal(true)}>
                <Filter />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="ml-4 mr-4">
          <FavoritesListFragment />
        </View>
        <View className="ml-4 mr-4">
          <CharactersListFragment />
        </View>
        <FiltersFragment
          modalVisible={modal}
          setModalVisible={(value: boolean) => setModal(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
