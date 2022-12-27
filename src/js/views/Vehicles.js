import React, { useEffect, useContext } from "react";

import { Card } from "../components/Card";
import { Context } from "../store/appContext";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const vehicles = store.vehicles;

  const getVehicles = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    actions.insertVehicles(data);
  };

  useEffect(() => {
    getVehicles(`https://www.swapi.tech/api/vehicles`);
  }, []);

  const handleClick = () => {
    getVehicles(store.next_page);
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 p-5 d-flex justify-content-evenly">
      {!vehicles.length && <div>Loading ...</div>}
      {vehicles.map((vehicle) => (
        <Card
          id={vehicle.uid}
          title={vehicle.name}
          imgUrl={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
          category="vehicles"
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
