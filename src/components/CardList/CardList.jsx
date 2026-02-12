import React, { useState, useEffect } from "react";

import "./CardList.css";
import MovieCard from "../MovieCard/MovieCard";

function CardList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch("/movies.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format: expected an array of movies");
        }

        const checkImage = (imageName) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = `/images/${imageName}`;
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
        };

        const validatedMovies = [];

        for (const movie of data) {
          const hasRequiredFields =
            movie.id &&
            movie.title &&
            movie.genre &&
            movie.rating !== undefined;

          if (hasRequiredFields) {
            const exists = movie.image ? await checkImage(movie.image) : false;

            validatedMovies.push({
              id: movie.id,
              title: movie.title,
              genre: movie.genre,
              rating: movie.rating,
              image: exists ? movie.image : "default.jpg",
            });
          }
        }

        setMovies(validatedMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="status-container">
        <div className="loader"></div>
        <p style={{ fontSize: "1.5rem" }}>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <h3 style={{ fontSize: "1.5rem", fontWeight: 500 }}>
          Ups! An unexpected error occurred.
        </h3>
        <h4 style={{ fontSize: "1.2rem", fontWeight: 400, marginTop: "10px" }}>
          Please reload the page and try again.
        </h4>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="status-container empty">
        <p style={{ fontSize: "1.5rem" }}>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="movies-tray">
      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
