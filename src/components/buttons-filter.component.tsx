// ↓ beloved react ↓
import React, {useContext} from 'react';
import {Text, View} from 'react-native';

// ↓ store ↓
import {AppContext} from '@src/store';

export default function ButtonsFilterComponent({}) {
  const {
    state: {filters},
  }: any = useContext(AppContext);
  const charactersFilters = [
    {
      name: 'All',
      value: 'ALL',
    },
    {
      name: 'Starred',
      value: 'STARRED',
    },
    {
      name: 'Others',
      value: 'OTHERS',
    },
  ];
  const specieFilters = [
    {
      name: 'All',
      value: 'ALL',
    },
    {
      name: 'Human',
      value: 'HUMAN',
    },
    {
      name: 'Alien',
      value: 'ALIEN',
    },
  ];
  const sortingFilters = [
    {
      name: 'A to Z',
      value: 'ASC',
    },
    {
      name: 'Z to A',
      value: 'DESC',
    },
  ];
  return (
    <>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Characters'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {charactersFilters.map((item, key) => {
          return (
            <View
              key={`filter-${key}`}
              className={`border rounded-lg border-gray-200 w-24 h-10 mx-2 ${
                filters.characters === item.value && 'bg-purple-200'
              }`}>
              <Text
                className={`text-sm m-auto ${
                  filters.characters === item.value && 'text-purple-700'
                }`}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Specie'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {specieFilters.map((item, key) => {
          return (
            <View
              key={`filter-${key}`}
              className={`border rounded-lg border-gray-200 w-24 h-10 mx-2 ${
                filters.specie === item.value && 'bg-purple-200'
              }`}>
              <Text
                className={`text-sm m-auto ${
                  filters.specie === item.value && 'text-purple-700'
                }`}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Sorting'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {sortingFilters.map((item, key) => {
          return (
            <View
              key={`filter-${key}`}
              className={`border rounded-lg border-gray-200 w-24 h-10 mx-2 ${
                filters.sorting === item.value && 'bg-purple-200'
              }`}>
              <Text
                className={`text-sm m-auto ${
                  filters.sorting === item.value && 'text-purple-700'
                }`}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
