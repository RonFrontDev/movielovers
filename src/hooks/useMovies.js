import { useState } from "react";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTBmMzkyN2NhNDJmMDgxNTM3ZGI1YjA1ZWNhYTRhNyIsInN1YiI6IjY0NmNhNDkzMmJjZjY3MDEzODk2OTE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8GonYBmXre-TyPRJH2Evd4M4rCDqAKqtZfUDrfm-0s";

function useMovies() {
  const [movieData, setData] = useState(null);
  const [singleMovieData, setSingleMovieData] = useState(null);
  const [keyword, setKeyword] = useState("");

  function searchMovie(keyword, pageNumber) {
    setKeyword(keyword);
    // Her lave axios kald
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          query: keyword,
          page: pageNumber,
          include_adult: "false",
          language: "en-US",
        },
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setData(response.data));
  }
  function getMovie(id) {
    // Her lave axios kald
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => setSingleMovieData(response.data));
  }

  return {
    movieData,
    setData,
    searchMovie,
    getMovie,
    singleMovieData,
    setSingleMovieData,
    keyword,
  };
}

export default useMovies;
