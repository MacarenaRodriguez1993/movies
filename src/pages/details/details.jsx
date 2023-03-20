import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./details.css";
const Details = () => {
  const movieId = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=b8fec63b21e4487c8bf47e84ca21a09d`
    );
    setDetails(movieDetails.data);
  };

  return (
    <div style={{ backgroundColor: "#002", height: "100vh", color: "#fff" }}>
      <Navbar />
      {details ? (
        <div style={{ display: "flex", margin: "6em" }}>
          <div>
            <img
              className="imgDetails"
              src={
                "https://image.tmdb.org/t/p/original" + details.backdrop_path
              }
              alt={details.title}
            />
          </div>
          <div style={{ marginLeft: "4em" }}>
            <h2>{details.title} </h2>
            <h4>{details.overview}</h4>
            <p
              style={{
                backgroundColor: "#941b00",
                width: "15%",
                textAlign: "center",
                borderRadius: "1em",
              }}
            >
              {details.vote_average}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5em",
              }}
            >
              <p>
                Genres:
                {details.genres?.map((g) => {
                  return <li>{g.name}</li>;
                })}
              </p>
              <p>
                Production Companies:
                {details.production_companies?.map((p) => {
                  return <li>{p.name}</li>;
                })}
              </p>
            </div>

            <p style={{ marginTop: "0.5em" }}>
              Release_date : {details.release_date}
            </p>
            <p>Runtime : {details.runtime} min </p>
          </div>
        </div>
      ) : (
        <div>
          <h3>loading</h3>
        </div>
      )}
    </div>
  );
};

export default Details;
