import {CharactersType} from '@src/types/main.types';
import _ from 'lodash';

export const returnFavorites = (arrayCharacters: any) => {
  const favorites = _.filter(arrayCharacters, item => {
    return item.favorite;
  });
  return favorites;
};

export const returnCharacters = (arrayCharacters: any) => {
  return _.filter(arrayCharacters, item => {
    return !item.favorite;
  });
};

export const returnAdvancedFilter = (arrayCharacters: any, filter: string) => {
  const lowerFilter = filter.toLowerCase();
  return _.filter(arrayCharacters, item => {
    return item.specie === lowerFilter;
  });
};

export const translateCharacters = (responseArray: any) => {
  return responseArray.map((item: CharactersType) => {
    return {...item, favorite: false};
  });
};
