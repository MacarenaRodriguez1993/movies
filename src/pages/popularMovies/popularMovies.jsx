import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./popularMovies.css";
const AllPopular = ({ popular }) => {
  console.log(popular);
  return (
    <div className="allPopular">
      <Navbar />
      <div style={{ margin: "0em 7em" }}>
        <h2>🔥 All Popular Movie</h2>
        <div className="content">
          {popular?.map((p) => {
            return (
              <div className="cardPopular">
                <img
                  src={`https://image.tmdb.org/t/p/original${p.backdrop_path}`}
                  alt={p.title}
                />
                <h5>{p.title}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPopular;
