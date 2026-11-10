import { useState } from "react";
import { Link } from "react-router-dom";

import { movies, genres } from "../data/movies";
import MovieGrid from "../components/MovieGrid";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import useFavorites from "../hooks/usefavorites";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  const displayedMovies = filteredMovies.slice(0, 8);

  return (
    <div className="home-page">
      <section className="hero-section text-center text-white py-5">
        <div className="container py-5">
          <h1 className="display-3 fw-bold">Welcome to CineWave</h1>

          <p className="lead mt-3">
            Discover movies, explore stories, and find your next favorite film.
          </p>

          <Link to="/movies" className="btn btn-warning btn-lg mt-3">
            Explore Movies
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-white fw-bold mb-4">Discover Movies</h2>

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

        {displayedMovies.length > 0 ? (
          <MovieGrid
            movies={displayedMovies}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        ) : (
          <p className="text-center text-secondary py-5">
            No movies found.
          </p>
        )}

        <div className="text-center mt-5">
          <Link to="/movies" className="btn btn-warning btn-lg px-5">
            More Movies →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;