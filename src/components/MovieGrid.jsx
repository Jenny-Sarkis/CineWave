import MovieCard from "./MovieCard";

function MovieGrid({ movies, addFavorite, removeFavorite, isFavorite }) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            isFavorite={isFavorite}
          />
        ))}

      </div>
    </div>
  );
}

export default MovieGrid;