import { Link } from "react-router-dom";

function MovieCard({ movie, addFavorite, removeFavorite, isFavorite }) {
  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="col">
      <div className="card movie-card h-100 bg-dark text-white border-0">

        <img
          src={movie.image}
          className="card-img-top movie-poster"
          alt={movie.title}
        />

        <div className="card-body d-flex flex-column">

          <h5 className="card-title fw-bold">
            {movie.title}
          </h5>

          <p className="text-secondary mb-2">
            {movie.year} | {movie.genre}
          </p>

          <p>⭐ {movie.rating}/10</p>

          <div className="d-flex gap-2 mt-auto">

            <Link
              to={`/movies/${movie.id}`}
              className="btn btn-outline-warning flex-grow-1"
            >
              View Details
            </Link>

            <button
              onClick={handleFavorite}
              className={`btn ${
                favorite ? "btn-danger" : "btn-outline-danger"
              }`}
              title={favorite ? "Remove from favorites" : "Add to favorites"}
            >
              {favorite ? "♥" : "♡"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieCard;