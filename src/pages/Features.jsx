function Features() {
  const features = [
    {
      icon: "🎥",
      title: "Movie Collection",
      description:
        "Explore a collection of movies from different genres and years."
    },
    {
      icon: "🔍",
      title: "Search Movies",
      description:
        "Quickly find movies by typing their titles in the search bar."
    },
    {
      icon: "🎭",
      title: "Genre Filtering",
      description:
        "Filter movies according to your favorite genres."
    },
    {
      icon: "⭐",
      title: "Movie Ratings",
      description:
        "Discover movie ratings and learn more about each film."
    },
    {
      icon: "❤️",
      title: "Favorites",
      description:
        "Save your favorite movies and access them easily."
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Enjoy CineWave on desktops, tablets, and mobile devices."
    }
  ];

  return (
    <div className="container py-5 text-white">

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Features</h1>
        <p className="text-secondary lead">
          Everything you need to discover your next favorite movie.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {features.map((feature, index) => (
          <div className="col" key={index}>
            <div className="card bg-dark text-white border-secondary h-100 text-center p-4">

              <div className="display-3 mb-3">
                {feature.icon}
              </div>

              <h4 className="fw-bold text-warning">
                {feature.title}
              </h4>

              <p className="text-secondary mb-0">
                {feature.description}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Features;