import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import WatchlistButton from "../WatchlistButton/WatchlistButton";

const MovieCard = ({ movie }) => {
  const movieImagePath = `/images/${movie.image}`;

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-card-link">
        <div className="image-container">
          <img src={movieImagePath} alt={movie.title} className="movie-image" />
        </div>
      </Link>
      <div className="movie-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div className="meta-info">
          <span className="genre">
            {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
          </span>
          <span className="rating-badge">{movie.rating}</span>
        </div>
        <WatchlistButton movieId={movie.id} />
      </div>
    </div>
  );
};

export default MovieCard;
