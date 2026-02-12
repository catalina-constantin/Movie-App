import { useState, useEffect } from "react";
import { checkImageExists } from "../utils/movieUtils";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/movies.json");
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();

        const validated = [];
        for (const movie of data) {
          const exists = movie.image
            ? await checkImageExists(movie.image)
            : false;
          validated.push({
            ...movie,
            image: exists ? movie.image : "default.jpg",
          });
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

  return { movies, loading, error };
};
