import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../components/DetailsCard";

const getCharacter = async (setCharacter, id) => {
  const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
  const data = await res.json();
  setCharacter(data.result.properties);
};

export const PeopleDetails = () => {
  const [character, setCharacter] = useState({});
  const { peopleID } = useParams();

  useEffect(() => {
    getCharacter(setCharacter, peopleID);
  }, []);

  return (
    <DetailsCard
      title={character.name}
      img={`https://starwars-visualguide.com/assets/img/characters/${peopleID}.jpg`}
      properties={{
        "Birth Year": character.birth_year,
        Height:
          character.height !== "n/a"
            ? `${character.height} cm`
            : character.height,
        Wheight: character.mass,
        Gennder: character.gender,
        "Hair Color": character.hair_color,
        "Eye Color": character.eye_color,
        "Skin Color": character.skin_color,
      }}
    />
  );
};
