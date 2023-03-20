import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ image, name, id }) => {
  return (
    <div className="card">
      <Link to={`/details/${id}`}>
        <img
          className="imgPopular"
          src={"https://image.tmdb.org/t/p/original" + image}
          alt={name}
        />
      </Link>
      <h4>{name.slice(0, 30)}</h4>
    </div>
  );
};

export default Card;
