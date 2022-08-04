import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

const CharacterList = () => {
  const { loading, data, error } = useCharacters();

  if (loading) {
    return <h3>Loading....</h3>;
  }

  if (error) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
