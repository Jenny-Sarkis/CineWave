import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid bg-dark text-white py-5">
      <div className="container py-5 text-center">
        <h1 className="display-3 fw-bold">
          Welcome to CineWave
        </h1>

        <p className="lead mt-3">
          Discover amazing movies, explore different genres,
          and find your next favorite film.
        </p>

        <Link to="/movies" className="btn btn-primary btn-lg mt-3">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Hero;