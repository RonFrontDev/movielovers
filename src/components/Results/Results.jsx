import React, { useContext } from "react";
import "./Results.scss";
import { MovieContext } from "../../App";
import { Link } from "react-router-dom";
import dummyPicture from "../../images/dummyImage.jpg";
import { BASE_URL } from "../../constants";

function Results() {
  const { movieData } = useContext(MovieContext);

  // console.log(movieData);

  return (
    <div className="results">
      {movieData?.results?.map((movie) => {
        return (
          <Link className="results__link" to={String(movie.id)} key={movie.id}>
            <img
              className="results__image"
              src={
                movie.poster_path === null
                  ? dummyPicture
                  : `${BASE_URL}${movie.poster_path}`
              }
              alt="movie poster"
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Results;

// mobile results next page start from top
// if there is not more page dont diplay what number page you are on
