import "./App.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

function App() {
  const API_URL = "https://www.omdbapi.com?apikey=66278e14";

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);

      const data = await response.json();
      setMovies(data.Search);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieMania</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie1={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Mo movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
