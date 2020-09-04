import gql from 'graphql-tag';

export default gql`
  query getAllPokemons($where: JSON) {
    pokemons(where: $where, sort: "number") {
      # TODO:
    }
  }
`;
