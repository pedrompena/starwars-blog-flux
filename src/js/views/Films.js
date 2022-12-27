import React, { useState, useEffect } from "react";

import { Card } from "../components/Card";

const getFilms = async (setFilms) => {
  const res = await fetch("https://www.swapi.tech/api/films");
  const films = await res.json();
  setFilms(films.result);
};

export const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms(setFilms);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5 d-flex justify-content-evenly">
      {!films.length && <div>Loading ...</div>}
      {films.map((film) => (
        <Card
          key={film.uid}
          id={film.uid}
          title={film.properties.title}
          imgUrl={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
          category="films"
        />
      ))}
    </div>
  );
};
