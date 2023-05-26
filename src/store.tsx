import {createContext, useState} from 'react';

export const AppContext: any = createContext(null);

type Props = {children: any};

export default function AppContextContainer({children}: Props) {
  const [favorites, setFavorites] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    characters: 'ALL',
    specie: 'ALL',
    sorting: 'ASC',
  });

  return (
    <AppContext.Provider
      value={{
        setFavorites,
        setCharacters,
        setFilters,
        state: {
          characters,
          favorites,
          filters,
        },
      }}>
      {children}
    </AppContext.Provider>
  );
}
