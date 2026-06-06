import { useFavorites } from "../FavoritesContext";
import { useNavigate } from "react-router-dom";

function Favourites() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>My Favourites</h2>
      {favorites.length === 0 ? (
        <p>No favourites yet. Go add some!</p>
      ) : (
        <p>You have {favorites.length} favourite(s).</p>
      )}
      <button onClick={() => navigate("/")}>← Back to Home</button>
    </div>
  );
}

export default Favourites;