function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
  return (
    <div className="mb-4">
      <select
        className="form-select"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;