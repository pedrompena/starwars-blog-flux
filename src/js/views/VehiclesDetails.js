import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DetailsCard } from "../components/DetailsCard";

const getVehicle = async (setVehicle, id) => {
  const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
  const data = await res.json();
  setVehicle(data.result.properties);
};

export const VehiclesDetails = () => {
  const [vehicle, setVehicle] = useState({});
  const { vehicleID } = useParams();

  useEffect(() => {
    getVehicle(setVehicle, vehicleID);
  }, []);

  return (
    <DetailsCard
      title={vehicle.name}
      img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleID}.jpg`}
      properties={{
        Model: vehicle.model,
        Manufacturer: vehicle.manufacturer,
        Class: vehicle.vehicle_class,
        Cost:
          vehicle.cost_in_credits !== "n/a"
            ? `${vehicle.cost_in_credits} credits`
            : vehicle.cost_in_credits,
        Speed:
          vehicle.max_atmosphering_speed !== "n/a"
            ? `${vehicle.max_atmosphering_speed} km/h`
            : vehicle.max_atmosphering_speed,
        Length:
          vehicle.length !== "n/a" ? `${vehicle.length} m` : vehicle.length,
        "Cargo Capacity": vehicle.cargo_capacity,
        Crew: vehicle.crew,
        Passengers: vehicle.passengers,
      }}
    />
  );
};
