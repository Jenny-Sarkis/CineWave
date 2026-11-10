import { useState, useEffect } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites whenever they change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to favorites
  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === movie.id)) {
        return prevFavorites;
      }

      return [...prevFavorites, movie];
    });
  };

  // Remove a movie from favorites
  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((movie) => movie.id !== movieId)
    );
  };

  // Check if a movie is already a favorite
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  };
}

export default useFavorites;