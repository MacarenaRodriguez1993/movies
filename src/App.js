import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/details/details";
import Home from "./pages/home/home";
import axios from "axios";
import AllPopular from "./pages/popularMovies/popularMovies";

function App() {
  const [popular, setPopular] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getMovies();
  }, [page]);
  const getMovies = async () => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setPopular(movies.data.results);
    const moviesTop = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setTopMovie(moviesTop.data.results);
  };
  const onSearch = async (movie) => {
    const movies = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movie}`
    );
    setTopMovie(movies.data.results);
  };
  const changePage = (pagina) => {
    setPage(pagina);
    console.log(pagina);
  };
  const reset = () => {
    getMovies();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              popular={popular}
              topMovie={topMovie}
              onSearch={onSearch}
              changePage={changePage}
              page={page}
            />
          }
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/allPopular" element={<AllPopular popular={popular} />} />
      </Routes>
    </div>
  );
}

export default App;
