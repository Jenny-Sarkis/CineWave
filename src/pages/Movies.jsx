import { useState } from "react";

import { movies, genres } from "../data/movies";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import useFavorites from "../hooks/useFavorites";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const {
    addFavorite,
    removeFavorite,
    isFavorite
  } = useFavorites();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="container py-5">

      <h1 className="text-white fw-bold mb-2">
        All Movies
      </h1>

      <p className="text-secondary mb-4">
        Explore our movie collection and discover your favorites.
      </p>

      <div className="row mb-4">

        <div className="col-md-8 mb-3">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <div className="col-md-4 mb-3">
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>

      </div>

      {filteredMovies.length > 0 ? (
        <MovieGrid
          movies={filteredMovies}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={isFavorite}
        />
      ) : (
        <div className="text-center text-secondary py-5">
          <h4>No movies found!</h4>
          <p>Try another title or genre.</p>
        </div>
      )}

    </div>
  );
}

export default Movies;