import React from "react";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import "./allMovies.css";
const AllMovies = ({ topMovie }) => {
  return (
    <>
      <div className="top">
        <h1>🔥 All Movies</h1>
      </div>
      {topMovie ? (
        <div style={{ display: "grid" }}>
          {topMovie?.map((m) => {
            return (
              <>
                <div className="colum">
                  <div className="imageTop">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original" + m.backdrop_path
                      }
                      alt=""
                    />
                  </div>
                  <div className="descriptionTop">
                    <h1>{m.title}</h1>
                    <p>{m.overview}</p>
                    <Link
                      to={`/details/${m.id}`}
                      style={{ textDecoration: "none", color: "#020262" }}
                      className="clickDetails"
                    >
                      <button className="boton">More..</button>
                    </Link>
                  </div>
                </div>

                <hr style={{ width: "80%" }} />
              </>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllMovies;
