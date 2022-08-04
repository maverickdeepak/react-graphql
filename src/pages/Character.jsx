import React from "react";
import { useCharatcer } from "../hooks/useCharacter";
import { useParams, Link } from "react-router-dom";

import "./Character.css";

const Character = () => {
  const { id } = useParams();

  const { loading, data, error } = useCharatcer(id);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <>
      <Link to={`/`} className="button">
        Back
      </Link>
      <div className="character">
        <img src={data.character.image} height={750} width={750} />
        <div className="character-content">
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <div className="character-episode">
            {data.character.episode.map((episode) => {
              return (
                <div key={episode.id}>
                  {episode.name} - <b>episode: {episode.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
