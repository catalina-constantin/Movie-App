import React, { useState, useEffect, useMemo } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
        <CardList
          manualMovies={watchlistMovies}
          externalLoading={loading}
          externalError={error}
          searchQuery=""
          genreFilter=""
          sortBy=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Watchlist;
