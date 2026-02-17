import React, { useState, useEffect, useMemo } from "react";

import CardList from "../../components/CardList/CardList";
import { useMovies } from "../../hooks/useMovies";

const Watchlist = () => {
  const { movies, loading, error } = useMovies();
  const [savedIds, setSavedIds] = useState(
    () => JSON.parse(localStorage.getItem("watchlist")) || [],
  );

  useEffect(() => {
    const handleUpdate = () => {
      setSavedIds(JSON.parse(localStorage.getItem("watchlist")) || []);
    };
    window.addEventListener("storage", handleUpdate);
    return () => window.removeEventListener("storage", handleUpdate);
  }, []);

  const watchlistMovies = useMemo(
    () => movies.filter((movie) => savedIds.includes(movie.id)),
    [movies, savedIds],
  );

  return (
    <CardList
      manualMovies={watchlistMovies}
      externalLoading={loading}
      externalError={error}
      searchQuery=""
      genreFilter=""
      sortBy=""
    />
  );
};

export default Watchlist;
