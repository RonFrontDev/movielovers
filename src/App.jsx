import useMovies from "./hooks/useMovies";
import "./App.scss";
import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./View/Home/Home";
import Singlepage from "./components/Singlepage/Singlepage";

export const MovieContext = createContext();

function App() {
  const movieVariables = useMovies();

  return (
    <BrowserRouter>
      <MovieContext.Provider value={movieVariables}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieid" element={<Singlepage />} />
        </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;
