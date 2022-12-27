import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../components/DetailsCard";

const getStarship = async (setStarship, id) => {
  const res = await fetch(`https://www.swapi.tech/api/starships/${id}`);
  const data = await res.json();
  setStarship(data.result.properties);
};

export const StarshipsDetails = () => {
  const [starship, setStarship] = useState({});
  const { starshipID } = useParams();

  useEffect(() => {
    getStarship(setStarship, starshipID);
  }, []);

  return (
    <DetailsCard
      title={starship.name}
      img={`https://starwars-visualguide.com/assets/img/starships/${starshipID}.jpg`}
      properties={{
        Model: starship.model,
        Manufacturer: starship.manufacturer,
        Class: starship.starship_class,
        Cost:
          starship.cost_in_credits !== "n/a"
            ? `${starship.cost_in_credits} credits`
            : starship.cost_in_credits,
        Speed:
          starship.max_atmosphering_speed !== "n/a"
            ? `${starship.max_atmosphering_speed} km/h`
            : starship.max_atmosphering_speed,
        "Hyperdrive Rating": starship.hyperdrive_rating,
        MGLT: starship.MGLT,
        Length:
          starship.length !== "n/a" ? `${starship.length} m` : starship.length,
        "Cargo Capacity":
          starship.cargo_capacity !== "n/a"
            ? parseInt(starship.cargo_capacity) / 1000 + " metrics tons"
            : starship.cargo_capacity,
        Crew: starship.crew,
        Passengers: starship.passengers,
      }}
    />
  );
};
