import MovieCard from "./MovieCard";

function MovieSection(props) {
  return (
    <div id={props.slideId} className="slide">
      <p className="section-label">{props.label}</p>
      <h2 className="section-heading">{props.heading}</h2>
      <div className="cards-grid">
        {props.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSection;
