import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h4 className="fw-bold">🎬 CineWave</h4>
            <p className="text-secondary mb-0">
              Discover your next favorite movie.
            </p>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <Link to="/" className="text-white text-decoration-none mx-2">
              Home
            </Link>

            <Link to="/about" className="text-white text-decoration-none mx-2">
              About
            </Link>
            <Link to="/contact" className="text-white text-decoration-none mx-2">
            Contact Us
            </Link>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <small className="text-secondary">
              © 2026 CineWave. All rights reserved.
            </small>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;