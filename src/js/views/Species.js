import React, { useEffect, useContext } from "react";
import { Card } from "../components/Card";

import { Context } from "../store/appContext";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const species = store.species;

  const getSpecies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    actions.insertSpecies(data);
  };

  useEffect(() => {
    getSpecies(`https://www.swapi.tech/api/species`);
  }, []);

  const handleClick = () => {
    getSpecies(store.next_page);
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5 d-flex justify-content-evenly">
      {!species.length && <div>Loading ...</div>}
      {species.map((specie) => (
        <Card
          id={specie.uid}
          title={specie.name}
          imgUrl={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
          category="species"
        />
      ))}
      <button
        className={
          "btn btn-dark fw-bold fs-1" + (!store.next_page ? " d-none" : "")
        }
        onClick={handleClick}
      >
        Load More...
      </button>
    </div>
  );
};
