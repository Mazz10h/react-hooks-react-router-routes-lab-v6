// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar/>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
<Link to={`/movie/${movie.id}`}>View Info</Link>
        </article>
      ))};
    </div>
  );
}

export default Home