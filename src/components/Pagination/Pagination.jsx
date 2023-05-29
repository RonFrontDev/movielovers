import React, { useContext } from "react";
import "./Pagination.scss";
import { MovieContext } from "../../App";

function Pagination() {
  const { movieData, searchMovie, keyword } = useContext(MovieContext);

  // console.log(movieData);

  function forward() {
    if (movieData.page >= movieData.total_pages) {
      searchMovie(keyword, 1);
    } else {
      searchMovie(keyword, movieData.page + 1);
    }
  }
  function previous() {
    if (movieData.page <= 1) {
      searchMovie(keyword, movieData.total_pages);
    } else {
      searchMovie(keyword, movieData.page - 1);
    }
  }

  return (
    <div className="pagination ">
      <button className="pagination__btn" onClick={previous}>
        previous page
      </button>
      <button className="pagination__btn " onClick={forward}>
        next page
      </button>
    </div>
  );
}

export default Pagination;
