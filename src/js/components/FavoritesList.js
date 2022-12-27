import React, { useContext } from "react";

import { Context } from "../store/appContext";

export const FavoritesList = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  const handleClick = (title) => {
    actions.deleteFavorites(title);
  };

  return (
    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
      {!favorites.length && (
        <li className="dropdown-item">Add your favorites</li>
      )}
      {favorites.map((fav, i) => (
        <li
          key={i}
          className="dropdown-item d-flex justify-content-around align-items-center"
        >
          <span>{fav.title}</span>
          <i className="fa-solid fa-xmark btn" onClick={() => handleClick(fav.title)}></i>
        </li>
      ))}
    </ul>
  );
};
