import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return (
      <div className="container text-center text-white py-5">
        <h2>Movie Not Found</h2>

        <Link to="/movies" className="btn btn-warning mt-3">
          Back to Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">

        <div className="col-md-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-8 text-white">

          <h1 className="fw-bold mb-3">
            {movie.title}
          </h1>

          <h5 className="text-warning mb-4">
            ⭐ {movie.rating}/10
          </h5>

          <p><strong>Release Year:</strong> {movie.year}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Director:</strong> {movie.director}</p>

          <h4 className="mt-4">Synopsis</h4>

          <p className="text-secondary">
            {movie.description}
          </p>

          <div className="d-flex gap-3 mt-4">

            <a
              href={movie.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger btn-lg"
            >
              ▶ Watch Now
            </a>

            <Link
              to="/movies"
              className="btn btn-outline-warning btn-lg"
            >
              Back to Movies
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;