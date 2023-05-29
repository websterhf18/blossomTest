export type CharactersType = {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  favorite: boolean;
};
export type FiltersType = {
  filters: {
    characters: string;
    specie: string;
    sorting: string;
  };
};

export type StoreType = {
  characters: Array<CharactersType>;
  results: Array<CharactersType>;
  filters: {
    characters: string;
    specie: string;
    sorting: string;
  };
  setResults: (newResults: Array<CharactersType>) => any;
  setCharacters: (newCharacters: Array<CharactersType>) => any;
  setFiltersCharacter: (value: string) => any;
  setFiltersSpecie: (value: string) => any;
  setFiltersSorting: (value: string) => any;
};

export type ArrayConstants = {
  name: string;
  value: string;
};
