import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
