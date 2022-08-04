import { useQuery, gql } from "@apollo/client";

const GET_GETCHARATCER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        id
        name
        episode
      }
    }
  }
`;

export const useCharatcer = (id) => {
  const { loading, data, error } = useQuery(GET_GETCHARATCER, {
    variables: { id },
  });

  return {
    loading,
    data,
    error,
  };
};
