import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center text-white py-5">

      <h1 className="display-1 fw-bold text-warning">
        404
      </h1>

      <h2 className="fw-bold">
        Page Not Found
      </h2>

      <p className="text-secondary mt-3">
        Sorry! The page you are looking for does not exist.
      </p>

      <Link to="/" className="btn btn-warning mt-3">
        Back to Home
      </Link>

    </div>
  );
}

export default NotFound;
