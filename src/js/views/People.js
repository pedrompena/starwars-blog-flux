import React, { useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Card } from "../components/Card";

export const People = () => {
  const { store, actions } = useContext(Context);
  const characters = store.characters;

  const getCharacters = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    actions.insertCharacters(data);
  };

  useEffect(() => {
    getCharacters(`https://www.swapi.tech/api/people`);
  }, []);

  const handleClick = () => {
    getCharacters(store.next_page);
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5 d-flex justify-content-evenly">
      {!characters.length && <div>Loading ...</div>}
      {characters.map((character, i) => (
        <Card
          key={character.uid}
          id={character.uid}
          title={character.name}
          imgUrl={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
          category="characters"
        />
      ))}
      <button
        className={
          "btn btn-dark fw-bold fs-1" +
          (!store.next_page ? " d-none" : "")
        }
        onClick={handleClick}
      >
        Load More...
      </button>
    </div>
  );
};
