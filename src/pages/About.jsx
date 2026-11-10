import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container py-5 text-white">

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          About CineWave
        </h1>

        <p className="lead text-secondary mt-3">
          Your destination for discovering great movies.
        </p>
      </div>

      <div className="row align-items-center g-5">

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            Who We Are
          </h2>

          <p className="text-secondary">
            CineWave is a movie discovery website designed for movie
            lovers. Our goal is to make exploring movies simple,
            enjoyable, and accessible.
          </p>

          <p className="text-secondary">
            Users can browse different movies, explore their details,
            search by title, filter by genre, and save their favorite
            movies.
          </p>

          <Link to="/movies" className="btn btn-warning mt-3">
            Explore Movies
          </Link>
        </div>

        <div className="col-md-6 text-center">
          <div className="about-icon">
            🎬
          </div>

          <h3 className="fw-bold mt-3">
            Discover. Explore. Enjoy.
          </h3>
        </div>

      </div>

    </div>
  );
}

export default About;