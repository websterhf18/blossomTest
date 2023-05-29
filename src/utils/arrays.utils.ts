import {CharactersType} from '@src/types/main.types';
import _ from 'lodash';

export const returnFavorites = (arrayCharacters: Array<CharactersType>) => {
  const favorites = _.filter(arrayCharacters, item => {
    return item.favorite;
  });
  return favorites;
};

export const returnCharacters = (arrayCharacters: Array<CharactersType>) => {
  return _.filter(arrayCharacters, item => {
    return !item.favorite;
  });
};

export const returnAdvancedFilter = (
  arrayCharacters: Array<CharactersType>,
  filter: string,
) => {
  const lowerFilter = filter.toLowerCase();
  const capitalizeFilter =
    lowerFilter.charAt(0).toUpperCase() + lowerFilter.slice(1);
  return _.filter(arrayCharacters, item => {
    return item.species === capitalizeFilter;
  });
};

export const translateCharacters = (responseArray: Array<CharactersType>) => {
  return responseArray.map((item: CharactersType) => {
    return {...item, favorite: false};
  });
};
