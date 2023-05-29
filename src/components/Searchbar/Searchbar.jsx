import React, { useContext } from "react";
import "./Searchbar.scss";
import { MovieContext } from "../../App";

function SearchBar() {
  const { searchMovie, setData, keyword } = useContext(MovieContext);

  function onkeypressed(evt) {
    var code = evt.charCode || evt.keyCode;
    if (code === 27) {
      const input = document.getElementById("search");
      if (input) {
        input.value = "";
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.search.value;
    if (searchTerm.trim() === "") {
      // Reset the search
      setData(null);
    } else {
      searchMovie(searchTerm, 1);
      // onSearch?.(true);
    }
  };

  const timer = debounce((event) => {
    const searchTerm = event.target.value;
    if (searchTerm.trim() === "") {
      setData(null);
    } else {
      searchMovie(searchTerm, 1);
      // onSearch?.(true);
    }
  }, 1000);

  const handleChange = (event) => {
    timer(event);
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        just playing with axios and API´s
        <input
          onKeyUp={onkeypressed}
          defaultValue={keyword}
          onInput={handleChange}
          autoComplete="off"
          name="search"
          id="search"
          className="searchbar__input"
          type="text"
          placeholder="Enter your search here"
        />
        {/* <button className="searchbar__btn" type="submit">
          Search
        </button> */}
      </form>
    </div>
  );
}

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default SearchBar;
