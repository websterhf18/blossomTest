import {create} from 'zustand';
import {CharactersType, FiltersType, StoreType} from './types/main.types';

export const useStore = create<StoreType>(set => ({
  characters: [],
  results: [],
  filters: {
    characters: 'ALL',
    specie: 'ALL',
    sorting: 'ASC',
  },
  setResults: (newResults: Array<CharactersType>) =>
    set(() => ({results: newResults})),
  setCharacters: (newCharacters: Array<CharactersType>) =>
    set(() => ({characters: newCharacters})),
  setFiltersCharacter: (value: string) =>
    set((state: FiltersType) => ({
      filters: {...state.filters, characters: value},
    })),
  setFiltersSpecie: (value: string) =>
    set((state: FiltersType) => ({filters: {...state.filters, specie: value}})),
  setFiltersSorting: (value: string) =>
    set((state: FiltersType) => ({
      filters: {...state.filters, sorting: value},
    })),
}));
