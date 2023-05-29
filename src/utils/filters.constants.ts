import {ArrayConstants} from '@src/types/main.types';

export const charactersFilters: Array<ArrayConstants> = [
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
export const specieFilters: Array<ArrayConstants> = [
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
export const sortingFilters: Array<ArrayConstants> = [
  {
    name: 'A to Z',
    value: 'ASC',
  },
  {
    name: 'Z to A',
    value: 'DESC',
  },
];
