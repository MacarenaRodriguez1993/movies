import React from "react";
import AllMovies from "../../components/allMovies/allMovies";
import Banner from "../../components/banner/banner";
import PopularMovie from "../../components/popularMovie/popularMovie";
import "./home.css";

const Home = ({ popular, topMovie, onSearch }) => {
  return (
    <div className="home">
      <Banner onSearch={onSearch} />
      <PopularMovie movies={popular} />
      <AllMovies topMovie={topMovie} />
    </div>
  );
};

export default Home;
