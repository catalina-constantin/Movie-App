import React from "react";

import "./SearchBar.css";
import { MOVIE_GENRES } from "../../data/genres";

const SearchBar = ({
  value,
  onSearchChange,
  genreValue,
  onGenreChange,
  sortValue,
  onSortChange,
}) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <span className="search-icon" aria-hidden="true"></span>
        <input
          id="search-input"
          name="search"
          type="text"
          placeholder="Search movies..."
          value={value}
          onChange={(event) => onSearchChange(event.target.value)}
        ></input>
        {value ? (
          <button
            type="button"
            className="clear-search"
            aria-label="Clear search"
            onClick={() => onSearchChange("")}
          ></button>
        ) : null}
      </div>
      <select
        id="genre-filter"
        name="genre"
        className="filter-dropdown"
        value={genreValue}
        onChange={(event) => onGenreChange(event.target.value)}
      >
        {MOVIE_GENRES.map((genre) => (
          <option key={genre.value || genre.label} value={genre.value}>
            {`Genre: ${genre.label}`}
          </option>
        ))}
      </select>
      <select
        className="filter-dropdown"
        value={sortValue}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="">Sort by: All</option>
        <option value="rating">Sort by: Rating</option>
        <option value="alphabetically">Sort by: Alphabetically</option>
      </select>
    </div>
  );
};

export default SearchBar;
