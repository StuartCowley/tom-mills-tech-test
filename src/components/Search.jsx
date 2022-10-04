import "../styles/search.css";
import React, { useState } from "react";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [searchText, setSearchText] = useState("");
  const handleInputChange = (e) => setSearchText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults(await getImages(searchText));
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit} >
        <input onChange={handleInputChange} value={searchText} className="search-input" type="text"></input>
        <button type="submit" className="search-button">Search</button>
      </form>
    </>
  )
}

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
