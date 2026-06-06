import { useState, useRef, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import HeroSlide from "./components/HeroSlide";
import MovieSection from "./components/MovieSection";
import ErrorBoundary from "./components/ErrorBoundary";
import Favourites from "./pages/Favourites";
import { useFavorites } from "./FavoritesContext";
import { englishMovies, teluguMovies } from "./data";

function App() {
  // controlled component — search
  const [search, setSearch] = useState("");

  // restore search from localStorage on first load
  useEffect(() => {
    const saved = localStorage.getItem("search");
    if (saved) setSearch(saved);
  }, []);

  // save search to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  // uncontrolled — ref to scroll back to top
  const topRef = useRef(null);

  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // filter movies based on search
  const filteredEnglish = englishMovies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredTelugu = teluguMovies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  const { count } = useFavorites();

  return (
    <div className="app" ref={topRef}>

      {/* nav */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem" }}>
        <Link to="/">Home</Link>
        <Link to="/favourites">❤️ Favourites ({count})</Link>
      </div>

      <Routes>

        {/* home route */}
        <Route
          path="/"
          element={
            <>
              {/* controlled input with form validation */}
              <div style={{ padding: "1rem", textAlign: "center" }}>
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={search}
                  onChange={(e) => {
                    if (e.target.value.length > 50) return; // validation
                    setSearch(e.target.value);
                  }}
                />
                {search.length > 40 && (
                  <p style={{ color: "red", fontSize: "12px" }}>Max 50 characters</p>
                )}
              </div>

              <HeroSlide />

              <ErrorBoundary>
                <MovieSection
                  slideId="slide-english"
                  label="Hollywood"
                  heading="English Movies"
                  movies={filteredEnglish}
                />
              </ErrorBoundary>

              <ErrorBoundary>
                <MovieSection
                  slideId="slide-telugu"
                  label="Tollywood"
                  heading="Telugu Movies"
                  movies={filteredTelugu}
                />
              </ErrorBoundary>

              <button onClick={scrollToTop} style={{ margin: "2rem" }}>
                ↑ Back to Top
              </button>
            </>
          }
        />

        {/* dynamic route */}
        <Route path="/movie/:id" element={<p style={{padding:"2rem"}}>Movie detail page</p>} />

        {/* protected route */}
        <Route
          path="/favourites"
          element={count === 0 ? <Navigate to="/" /> : <Favourites />}
        />

      </Routes>
    </div>
  );
}

export default App;