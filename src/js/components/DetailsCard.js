import React from "react";

export const DetailsCard = (props) => {
  const { title, img, properties } = props;

  return (
    <div className="card bg-dark text-white m-5">
      <div className="row g-0">
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <img
            src={img}
            className="img-fluid rounded-2"
            onError={(e) => (
              e.preventDefault(),
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
            )}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body p-5">
            <h5 className="card-title mb-4">{title}</h5>
            {Object.keys(properties).map(
              (property, i) =>
                properties[property] !== "n/a" && (
                  <p className="card-text" key={i}>
                    {property}:{" "}
                    <small className="text-muted">{properties[property]}</small>
                  </p>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
