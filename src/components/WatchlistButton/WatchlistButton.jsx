import React, { useState } from "react";
import "./WatchlistButton.css";

const WatchlistButton = ({ movieId }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(() => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      return watchlist.includes(movieId);
    } catch (error) {
      console.error("Error reading watchlist from localStorage", error);
      return false;
    }
  });

  const toggleWatchlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      let updatedWatchlist;

      if (isInWatchlist) {
        updatedWatchlist = watchlist.filter((id) => id !== movieId);
      } else {
        updatedWatchlist = [...watchlist, movieId];
      }

      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      setIsInWatchlist(!isInWatchlist);

      window.dispatchEvent(new Event("watchlistUpdated"));
    } catch (error) {
      console.error("Error updating watchlist", error);
    }
  };

  return (
    <button
      className={`watchlist-button ${isInWatchlist ? "active" : ""}`}
      onClick={toggleWatchlist}
    >
      <span className="icon">{isInWatchlist ? "" : "+"}</span>{" "}
      {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
};

export default WatchlistButton;
