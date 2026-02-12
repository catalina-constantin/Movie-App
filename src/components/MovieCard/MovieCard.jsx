import React, { useState } from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(() => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      return watchlist.includes(movie.id);
    } catch (error) {
      console.error("Error reading watchlist from localStorage", error);
      return false;
    }
  });
  const movieImagePath = `/images/${movie.image}`;

  const toggleWatchlist = (e) => {
    e.preventDefault();

    try {
      let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      let updatedWatchlist;

      if (isInWatchlist) {
        updatedWatchlist = watchlist.filter((id) => id !== movie.id);
      } else {
        updatedWatchlist = [...watchlist, movie.id];
      }

      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      setIsInWatchlist(!isInWatchlist);

      window.dispatchEvent(new Event("watchlistUpdated"));
    } catch (error) {
      console.error("Error updating watchlist", error);
    }
  };

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
        <button
          className={`watchlist-button ${isInWatchlist ? "active" : ""}`}
          onClick={toggleWatchlist}
        >
          <span className="icon">{isInWatchlist ? "" : "+"}</span>{" "}
          {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
