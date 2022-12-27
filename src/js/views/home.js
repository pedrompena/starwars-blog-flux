import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getCategories = async (setCategories) => {
  const res = await fetch("https://www.swapi.tech/api/");
  const categories = await res.json();
  setCategories(categories.result);
};

export const Home = () => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 p-4 my-5">
      {categories === {} && <div>Loading ...</div>}
      {Object.keys(categories).map((category, i) => (
        <div key={i} className="col">
          <div className="card text-bg-dark">
            <Link to={category === "people" ? "characters" : category}>
              <img
                className="card-img"
                src={`https://starwars-visualguide.com/assets/img/categories/${
                  category === "people" ? "character" : category
                }.jpg`}
              />
              <div className="card-img-overlay d-flex">
                <h5 className="fs-1 card-title m-auto text-light fw-bold text-capitalize">
                  {category}
                </h5>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
