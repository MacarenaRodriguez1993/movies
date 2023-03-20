import React from "react";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import "./banner.css";

const Banner = ({ onSearch }) => {
  return (
    <div className="banner">
      <Navbar />
      <div className="title">
        <h3 style={{ margin: "0" }}>What do you want to see today?</h3>
        <Search onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Banner;
