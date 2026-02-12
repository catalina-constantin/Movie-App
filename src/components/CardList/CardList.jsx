import React, { useState, useEffect, useMemo } from "react";
import "./CardList.css";
import MovieCard from "../MovieCard/MovieCard";
import StatusMessage from "./StatusMessage";
import { checkImageExists, filterAndSortMovies } from "../../utils/movieUtils";

function CardList({ searchQuery, genreFilter, sortBy }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/movies.json");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        const validated = [];

        for (const movie of data) {
          if (
            movie.id &&
            movie.title &&
            movie.genre &&
            movie.rating !== undefined
          ) {
            const exists = movie.image
              ? await checkImageExists(movie.image)
              : false;
            validated.push({
              ...movie,
              image: exists ? movie.image : "default.jpg",
            });
          }
        }
        setMovies(validated);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const processedMovies = useMemo(
    () => filterAndSortMovies(movies, { searchQuery, genreFilter, sortBy }),
    [movies, searchQuery, genreFilter, sortBy],
  );

  if (loading)
    return (
      <StatusMessage>
        <div className="loader"></div>
        <p style={{ fontSize: "1.5rem" }}>Loading movies...</p>
      </StatusMessage>
    );

  if (error)
    return (
      <StatusMessage type="error">
        <h3 style={{ fontSize: "1.5rem" }}>
          Ups! An unexpected error occurred.
        </h3>
        <p>Please reload the page and try again.</p>
      </StatusMessage>
    );

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
