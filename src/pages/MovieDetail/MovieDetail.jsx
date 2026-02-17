import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import LoadingMessage from "../../components/Loading/LoadingMessage";
import ErrorMessage from "../../components/Error/ErrorMessage";
import NotFoundMessage from "../../components/Error/NotFoundMessage";
import WatchlistButton from "../../components/WatchlistButton/WatchlistButton";

import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loading, error } = useMovies();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (loading) return <LoadingMessage />;
  if (error) return <ErrorMessage />;
  if (!movie) return <NotFoundMessage />;

  const movieImagePath = `/images/${movie.image}`;

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <svg
          className="back-arrow"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Go back</span>
      </button>
      <div className="movie-detail-page">
        <div className="movie-image-wrapper">
          <img
            src={movieImagePath}
            alt={movie.title}
            className="movie-detail-image"
          />
        </div>
        <div className="movie-info-section">
          <h1 className="movie-detail-title">{movie.title}</h1>
          <div className="movie-meta">
            <p>
              Genre:{" "}
              <span className="meta-badge genre-badge">
                {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
              </span>
            </p>
            <p>
              Rating:{" "}
              <span className="meta-badge rating-badge">
                {movie.rating} / 10
              </span>
            </p>
          </div>
          <WatchlistButton movieId={movie.id} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
