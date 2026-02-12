export const checkImageExists = (imageName) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = `/images/${imageName}`;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

export const filterAndSortMovies = (
  movies,
  { searchQuery, genreFilter, sortBy },
) => {
  const query = (searchQuery || "").trim().toLowerCase();
  const genre = (genreFilter || "").trim().toLowerCase();

  return movies
    .filter((movie) => {
      const matchesQuery = query
        ? movie.title.toLowerCase().includes(query)
        : true;
      const matchesGenre = !genre ? true : movie.genre.toLowerCase() === genre;
      return matchesQuery && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "alphabetically") return a.title.localeCompare(b.title);
      return 0;
    });
};
