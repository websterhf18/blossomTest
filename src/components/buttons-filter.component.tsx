// ↓ beloved react ↓
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

// ↓ store ↓
import {useStore} from '@src/store';
import {
  charactersFilters,
  sortingFilters,
  specieFilters,
} from '@src/utils/filters.constants';

export default function ButtonsFilterComponent({}) {
  const {
    filters,
    setFiltersCharacter,
    setFiltersSpecie,
    setFiltersSorting,
  }: any = useStore();
  const onSetFiltersCharacter = (value: string) => setFiltersCharacter(value);
  const onSetFiltersSpecie = (value: string) => setFiltersSpecie(value);
  const onSetFiltersSorting = (value: string) => setFiltersSorting(value);
  return (
    <>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Characters'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {charactersFilters.map((item, key) => {
          return (
            <TouchableOpacity onPress={() => onSetFiltersCharacter(item.value)}>
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
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Specie'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {specieFilters.map((item, key) => {
          return (
            <TouchableOpacity onPress={() => onSetFiltersSpecie(item.value)}>
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
            </TouchableOpacity>
          );
        })}
      </View>
      <View className="ml-4 mr-4 mt-10">
        <Text className="text-base">{'Sorting'}</Text>
      </View>
      <View className="ml-4 mr-4 mt-5 flex-row">
        {sortingFilters.map((item, key) => {
          return (
            <TouchableOpacity onPress={() => onSetFiltersSorting(item.value)}>
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
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
