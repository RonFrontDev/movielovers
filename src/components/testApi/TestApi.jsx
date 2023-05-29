import axios from "axios";
import "./TestApi.scss";
import { useEffect, useState } from "react";

function TestApi() {
  const [gen, setGen] = useState({ results: [] });

  function getMovie(id) {}

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTBmMzkyN2NhNDJmMDgxNTM3ZGI1YjA1ZWNhYTRhNyIsInN1YiI6IjY0NmNhNDkzMmJjZjY3MDEzODk2OTE2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8GonYBmXre-TyPRJH2Evd4M4rCDqAKqtZfUDrfm-0s",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setGen(response.data); // Update the state with the response data
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="testapi">
      {/* <p className="testapi__text">Playing with "The Movie database"</p> */}
      {/* Render the content from the Axios response */}
      {gen.results.map((movie) => (
        <div key={movie.id}>
          {/* <h3>{movie.title}</h3> */}
          <img
            className="testapi__image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          {/* <p>{movie.overview}</p> */}
        </div>
      ))}
    </div>
  );
}

export default TestApi;
