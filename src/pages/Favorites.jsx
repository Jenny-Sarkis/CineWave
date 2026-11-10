import { Link } from "react-router-dom";
import MovieGrid from "../components/MovieGrid";
import useFavorites from "../hooks/useFavorites";

function Favorites() {
  const { favorites } = useFavorites();
  return (
    <div className="container py-5">

      <h1 className="text-white fw-bold mb-2">
        ❤️ My Favorites
      </h1>

      <p className="text-secondary mb-4">
        All your favorite movies in one place.
      </p>

      {favorites.length > 0 ? (
        <MovieGrid
          movies={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isFavorite={isFavorite}
        />
      ) : (
        <div className="text-center text-white py-5">
          <h3>No Favorites Yet!</h3>

          <p className="text-secondary">
            You haven't added any movies to your favorites.
          </p>

          <Link to="/movies" className="btn btn-warning mt-3">
            Explore Movies
          </Link>
        </div>
      )}

    </div>
  );
}

export default Favorites;