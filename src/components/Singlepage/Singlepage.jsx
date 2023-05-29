import { Link, useParams } from "react-router-dom";
import "./Singlepage.scss";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../App";
import { BASE_URL } from "../../constants";

function Singlepage() {
  const { getMovie, singleMovieData, setSingleMovieData } =
    useContext(MovieContext);
  const { movieid } = useParams();

  // console.log(singleMovieData);

  useEffect(() => {
    getMovie(movieid);
    return () => {
      setSingleMovieData(null);
    };
  }, [movieid]);

  if (!singleMovieData) {
    return <div>Loading</div>;
  }

  return (
    <div className="singlemovie">
      <img
        className="singlemovie__image"
        src={BASE_URL + singleMovieData.poster_path}
        alt="movie poster"
      />
      <div className="singlemovie__infobox">
        <h3 className="singlemovie__title">{singleMovieData.original_title}</h3>
        <div>
          <p>Langauge</p>
          <p className="singlemovie__language">
            {singleMovieData.original_language}
          </p>
        </div>
        <div>
          <p>Genre</p>
          <p className="singlemovie__genre">{singleMovieData.genres[0].name}</p>
        </div>
        <div>
          <p>Release year</p>
          <p className="singlemovie__year">
            {getYearFromDate(singleMovieData.release_date)}
          </p>
        </div>
        <div>
          <p>Plot</p>
          <p className="singlemovie__plot">{singleMovieData.overview}</p>
        </div>
        <div>
          <p>Rating</p>
          <p className="singlemovie__rating">
            {singleMovieData.vote_average.toFixed(1)}
          </p>
        </div>
        <Link className="singlemovie__btn" to="/">
          back
        </Link>
      </div>
    </div>
  );
}

function getYearFromDate(dateString) {
  const date = new Date(dateString);
  const yearFormatter = new Intl.DateTimeFormat("en", { year: "numeric" });
  const year = Number(yearFormatter.format(date));
  return year;
}

export default Singlepage;
