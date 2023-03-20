import React, { useState } from "react";
import "./search.css";
import { FiSearch } from "react-icons/fi";
const Search = ({ onSearch }) => {
  const [search, setSearch] = useState();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
  };
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="search"
        value={search}
        className="input"
        placeholder=" search for a movie"
      />
      <button
        type="button"
        style={{
          border: "none",
          backgroundColor: "#adb1b4d8",
          color: "#366ed0",
        }}
        onClick={(e) => handleSubmit(e)}
      >
        {" "}
        <FiSearch size="1.5em" />
      </button>
    </div>
  );
};

export default Search;
