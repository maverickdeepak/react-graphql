import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, data, error, called }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <>
      <Link to="/" className="button">
        Back
      </Link>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => getLocations()}>Search</button>
        {loading && <h3>Loading...</h3>}
        {error && <h3>Something went wrong</h3>}
        {data && (
          <ul>
            {data.characters.results.map((character) => {
              return <li key={character.id}>{character.location.name}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
