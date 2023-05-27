import {create} from 'zustand';

export const useStore = create(set => ({
  characters: [],
  results: [],
  filters: {
    characters: 'ALL',
    specie: 'ALL',
    sorting: 'ASC',
  },
  setResults: (newResults: any) => set(() => ({results: newResults})),
  setCharacters: (newCharacters: any) =>
    set(() => ({characters: newCharacters})),
  setFiltersCharacter: (value: any) =>
    set((state: any) => ({filters: {...state.filters, characters: value}})),
  setFiltersSpecie: (value: any) =>
    set((state: any) => ({filters: {...state.filters, specie: value}})),
  setFiltersSorting: (value: any) =>
    set((state: any) => ({filters: {...state.filters, sorting: value}})),
}));
