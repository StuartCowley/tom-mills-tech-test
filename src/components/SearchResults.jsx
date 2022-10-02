import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if(!results.length) {
    return <p className="no-results">No results</p>
  } else {
    return (
      <div className="search-results" >
        {results.map((imageData) => (
          <img
            className="card-image"
            data-testid="test-result"
            src={imageData.links[0].href}
            alt={imageData.data[0].title}
            key={imageData.data[0].nasa_id}
          />
        ))}
      </div>
    );
  };
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({})),
}