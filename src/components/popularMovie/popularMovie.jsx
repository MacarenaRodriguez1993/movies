import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Card from "../card/card";
import "./popularMovie.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const PopularMovie = ({ movies }) => {
  const [indexI, setIndexI] = useState(0);
  const goBack = () => {
    setIndexI(indexI === 0 ? movies.length - 4 : indexI + 4);
  };
  const goNext = () => {
    setIndexI(indexI === movies.length - 4 ? 0 : indexI + 4);
  };
  const movieActive = movies.slice(indexI, indexI + 4);
  return (
    <>
      <div className="top">
        <h1>🔥 Popular Movie</h1>
        <Link to="/allPopular" style={{ color: "#366ed0" }}>
          <h4>
            View all <BsArrowRightShort />
          </h4>
        </Link>
      </div>
      <div className="cardPop">
        {movieActive.map((m) => (
          <Card key={m.id} image={m.backdrop_path} name={m.title} id={m.id} />
        ))}
      </div>
      <div className="buttons">
        <button className="buttonCarousel" onClick={goBack}>
          <AiOutlineArrowLeft size="1.5em" />
        </button>
        <button className="buttonCarousel" onClick={goNext}>
          <AiOutlineArrowRight size="1.5em" />
        </button>
      </div>
    </>
  );
};

export default PopularMovie;
