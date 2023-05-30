import React, { useContext, useState } from "react";
import "./Home.scss";
import SearchBar from "../../components/Searchbar/Searchbar";
import Results from "../../components/Results/Results";
import { MovieContext } from "../../App";
import Pagination from "../../components/Pagination/Pagination";

function Home() {
  const { movieData } = useContext(MovieContext);
  // const [searchPerformed, setSearchPerformed] = useState(false);

  return (
    <div className="home">
      <SearchBar />
      {movieData !== null && <Pagination />}
      <div className="home__pageinfo">
        {movieData !== null && <p>Page {movieData?.page}</p>}
        {movieData !== null && <p>Pages {movieData?.total_pages}</p>}
        {movieData == null && (
          <img
            className="home__image"
            src="images/darth.jpg"
            alt="background"
          />
        )}
        {movieData == null && <p className="home__headline">Movie Database</p>}
      </div>
      {movieData !== null && <Results />}
      {movieData !== null && <Pagination />}
      {/* <TestApi /> */}
    </div>
  );
}

export default Home;
