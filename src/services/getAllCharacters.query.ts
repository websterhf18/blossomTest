import {gql, useQuery} from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
        status
        location {
          name
        }
      }
    }
  }
`;

export const getAllCharactersQuery = () => useQuery(GET_ALL_CHARACTERS);
