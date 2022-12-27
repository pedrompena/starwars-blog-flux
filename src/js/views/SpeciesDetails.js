import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../components/DetailsCard";

const getSpecie = async (setSpecie, id) => {
  const res = await fetch(`https://www.swapi.tech/api/species/${id}`);
  const data = await res.json();
  setSpecie(data.result.properties);
};

export const SpeciesDetails = () => {
  const [specie, setSpecie] = useState({});
  const { specieID } = useParams();

  useEffect(() => {
    getSpecie(setSpecie, specieID);
  }, []);

  return (
    <DetailsCard
      title={specie.name}
      img={`https://starwars-visualguide.com/assets/img/species/${specieID}.jpg`}
      properties={{
        Classification: specie.classification,
        Designation: specie.designation,
        Lenguage: specie.language,
        "Avg Lisfespan":
          specie.average_lifespan !== "n/a"
            ? `${specie.average_lifespan} years`
            : specie.average_lifespan,
        "Avg Height":
          specie.average_height !== "n/a"
            ? `${specie.average_height} cm`
            : specie.average_height,
        "Hair Color(s)": specie.hair_colors,
        "Skin Color(s)": specie.skin_colors,
        "Eye Color(s)": specie.eye_colors,
      }}
    />
  );
};
