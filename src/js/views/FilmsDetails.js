import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../components/DetailsCard";

const getFilm = async (setFilm, id) => {
  const res = await fetch(`https://www.swapi.tech/api/films/${id}`);
  const data = await res.json();
  setFilm(data.result.properties);
};

export const FilmsDetails = () => {
  const [film, setfilm] = useState({});
  const { filmID } = useParams();

  useEffect(() => {
    getFilm(setfilm, filmID);
  }, []);

  return (
    <DetailsCard
      title={film.title}
      img={`https://starwars-visualguide.com/assets/img/films/${filmID}.jpg`}
      properties={{
        Date: film.release_date,
        Director: film.director,
        "Producer(s)": film.producer,
        "Opening Crawl": film.opening_crawl,
      }}
    />
  );
};
