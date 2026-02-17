import React, { useMemo } from "react";
import "./CardList.css";
import MovieCard from "../MovieCard/MovieCard";
import StatusMessage from "./StatusMessage";
import LoadingMessage from "../Loading/LoadingMessage";
import ErrorMessage from "../Error/ErrorMessage";
import { filterAndSortMovies } from "../../utils/movieUtils";
import { useMovies } from "../../hooks/useMovies";

function CardList({
  searchQuery,
  genreFilter,
  sortBy,
  manualMovies,
  isExternalLoading,
}) {
  const {
    movies: fetchedMovies,
    loading: internalLoading,
    error,
  } = useMovies();

  const movies = manualMovies || fetchedMovies;
  const loading =
    isExternalLoading !== undefined ? isExternalLoading : internalLoading;

  const processedMovies = useMemo(
    () => filterAndSortMovies(movies, { searchQuery, genreFilter, sortBy }),
    [movies, searchQuery, genreFilter, sortBy],
  );

  if (loading) return <LoadingMessage />;

  if (error) return <ErrorMessage />;

  if (processedMovies.length === 0)
    return (
      <StatusMessage type="empty">
        <p style={{ fontSize: "1.5rem" }}>No movies found.</p>
      </StatusMessage>
    );

  return (
    <div className="movies-tray">
      <div className="movies-list">
        {processedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
