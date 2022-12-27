import React, { useEffect, useContext } from "react";
import { Card } from "../components/Card";

import { Context } from "../store/appContext";

export const Planets = () => {
  const { store, actions } = useContext(Context);
  const planets = store.planets;

  const getPlanets = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    actions.insertPlanets(data);
  };

  useEffect(() => {
    getPlanets(`https://www.swapi.tech/api/planets`);
  }, []);

  const handleClick = () => {
    getPlanets(store.next_page);
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5 d-flex justify-content-evenly">
      {!planets.length && <div>Loading ...</div>}
      {planets.map((planet) => (
        <Card
          key={planet.uid}
          id={planet.uid}
          title={planet.name}
          imgUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
          category="planets"
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
