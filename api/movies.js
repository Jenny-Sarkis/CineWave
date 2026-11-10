export default async function handler(req, res) {
  try {
    const token = process.env.TMDB_API_READ_ACCESS_TOKEN;

    if (!token) {
      return res.status(500).json({
        error: "TMDB API token is missing."
      });
    }

    const { search = "", page = "1" } = req.query;

    const pageNumber = Math.max(1, Number(page) || 1);

    let apiUrl;

    if (search.trim()) {
      apiUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&page=${pageNumber}`;
    } else {
      apiUrl = `https://api.themoviedb.org/3/movie/popular?page=${pageNumber}`;
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch movies from TMDB."
      });
    }

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {
    console.error("TMDB Error:", error);

    return res.status(500).json({
      error: "Internal server error."
    });
  }
}
