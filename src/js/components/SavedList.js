import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SavedList = () => {
  const { store, actions } = useContext(Context);
  const saved = store.saved;

  const handleDeleteClick = (title) => {
    actions.deleteSaved(title);
  };

  return (
    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
      {!saved.length && (
        <li className="dropdown-item">Add to save</li>
      )}
      {saved.map((item, i) => (
        <li
          key={i}
          className="dropdown-item d-flex justify-content-around align-items-center"
        >
          <Link to={`/${item.category}/${item.id}`} relative="route" className="text-decoration-none text-warning"><span>{item.title}</span></Link>
          <i className="fa-solid fa-xmark btn" onClick={() => handleDeleteClick(item.title)}></i>
        </li>
      ))}
    </ul>
  );
};
