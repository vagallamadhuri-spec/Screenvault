import { useState } from "react";
import CastList from "./CastList";
import { useFavorites } from "../FavoritesContext";

function MovieCard(props) {
  const movie = props.movie;
  const [expanded, setExpanded] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(movie.id);

  return (
    <div className="card">
      <div className="poster">
  <img src={movie.poster} alt={movie.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>
      <div className="card-body">
        <p className="card-title">{movie.title}</p>
        <p className="card-year">★ {movie.year}</p>
        <p className="card-desc">{movie.desc}</p>

        <CastList cast={movie.cast} />

        <button onClick={() => toggleFavorite(movie.id)}>
          {isFav ? "❤️ Saved" : "🤍 Favourite"}
        </button>

        <button className="more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Less info ▲" : "More info ▼"}
        </button>

        {expanded && <p className="extra-text">{movie.extra}</p>}
      </div>
    </div>
  );
}

export default MovieCard;