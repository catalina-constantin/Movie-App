import React from "react";

import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const movieImagePath = `/images/${movie.image}`;

  return (
    <div className="movie-card">
      <div className="image-container">
        <img src={movieImagePath} alt={movie.title} className="movie-image" />
      </div>
      <div className="movie-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="meta-info">
          <span className="genre">{movie.genre}</span>
          <span className="rating-badge">{movie.rating}</span>
        </div>
        <button className="watchlist-button">
          <span className="icon">+</span> Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
