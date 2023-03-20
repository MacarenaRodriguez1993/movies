import React, { useState } from "react";
import AllMovies from "../../components/allMovies/allMovies";
import Banner from "../../components/banner/banner";
import PopularMovie from "../../components/popularMovie/popularMovie";
import "./home.css";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
const Home = ({ popular, topMovie, onSearch, page, changePage }) => {
  let [searchPage, setSearchPage] = useState(page);
  console.log(page);
  const pageBack = () => {
    console.log("back");
    if (page === 1) {
      console.log("page1");
    } else {
      page--;
      setSearchPage(page);
      changePage(page);
    }
  };

  const pageNext = () => {
    console.log("next");
    page++;

    setSearchPage(page);
    changePage(page);
  };
  return (
    <div className="home">
      <Banner onSearch={onSearch} />
      <PopularMovie movies={popular} />
      <AllMovies topMovie={topMovie} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "#fff",
        }}
      >
        <button onClick={pageBack} className="boton">
          <GrFormPreviousLink size="1.5em" color="#6b6262" /> Back
        </button>
        <button onClick={pageNext} className="boton">
          Next <GrFormNextLink size="1.5em" color="#6b6262" />
        </button>
      </div>
    </div>
  );
};

export default Home;
