import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [genreFilter, setGenreFilter] = useState(
    searchParams.get("genre") || ""
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "");

  useEffect(() => {
    const params = {};
    if (searchQuery) params.search = searchQuery;
    if (genreFilter) params.genre = genreFilter;
    if (sortBy) params.sort = sortBy;

    setSearchParams(params, { replace: true });
  }, [searchQuery, genreFilter, sortBy, setSearchParams]);

  return (
    <>
      <SearchBar
        value={searchQuery}
        onSearchChange={setSearchQuery}
        genreValue={genreFilter}
        onGenreChange={setGenreFilter}
        sortValue={sortBy}
        onSortChange={setSortBy}
      />
      <CardList
        searchQuery={searchQuery}
        genreFilter={genreFilter}
        sortBy={sortBy}
      />
    </>
  );
};

export default Home;
